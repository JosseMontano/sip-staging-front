import styles from "@/styles/product/showProduct.module.css";
import EmpanadaCarne from "@/assets/product/EmpanadaCarne.jpg";
import Info from "./info";
import ButtonsChange from "./buttonsChange";
import { ChangeEvent, useEffect, useState } from "react";
import Reserve from "./reserve";
import Review from "./review";
import { Section } from "@/interfaces/product/Section";
import Image from "next/image";
import { ProducType } from "@/interfaces/product/product";
import { useShoppingCar } from "@/store/shoppingCar";
import { ShoppingCarType } from "@/interfaces/global/shoppingCar";
import { clearScreenDown } from "readline";
import { UseUser } from "@/store/user";
import { Formik, Form, ErrorMessage, Field } from "formik";
import useForm from "@/hooks/global/useForm";
import { ReviewType, ShowReviewtype } from "@/interfaces/product/review";
import { getReviews, saveReview } from "@/services/product/reviews";
import { validateReview } from "@/validations/products/comment";

import Toast from "@/components/global/toast";
import UsefetchParams from "@/hooks/global/usefetchParams";

interface Params {
  v: ProducType;
  handleChangeMst: (msg: string, operation: boolean) => void;
  numberCompany:string
}

const ContenModal = ({ v, handleChangeMst, numberCompany }: Params) => {
  const [section, setSection] = useState<Section>("Info");
  const { user } = UseUser();

  const { addItem, items, updateCar,  changeNumberCompany } = useShoppingCar();
  const { handleSend, handleShowBtn, handleShowMessage } = useForm<
    ReviewType,
    null
  >({
    services: saveReview,
  });

  const handleAddItem = (amount: number) => {
    const product: ShoppingCarType = { ...v, amount };
    //if there is a value that verify that the product belongs to the same company
    if (items.length != 0) {
      if (product.company_id == items[0].company_id) {
        changeNumberCompany(numberCompany)
        //validate that does exist this id and the car
        const itemFind = items.find((v) => v.id === product.id);
        if (itemFind == undefined) {
          addItem(product);
          handleChangeMst("Se agrego al carrito", true);
        } else {
          const newAmount = product.amount + itemFind.amount;
          updateCar(itemFind.id, newAmount);
          handleChangeMst("Se actualizo el pedido", true);
        }

        return;
      }
      handleChangeMst(
        "No puedes agregar un producto que sea de otra compañia",
        false
      );

      return;
    }
    addItem(product);
  };

  //Get amount of starts
  const [amountStart, setAmountStart] = useState(1);
  const getAmountStarts = (val: number) => {
    setAmountStart(val);
  };

  //Get value of textArea
  const [description, setDescription] = useState("");
  const handleGetDes = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  
  const handlePost = async () => {
    const productId = v.id.toString();
    validateReview({ description, productId });

    const dataObj: ReviewType = {
      description: description,
      product_id: productId,
      qualification: amountStart.toString(),
      user_id: user.id.toString(),
      title: "Hola",
    };
    const { data } = await handleSend(dataObj);
    console.log(data);
    /*const { handleSend, handleShowBtn, handleShowMessage } = useForm<
      ReviewType,
      null
    >({
      services:saveReview ,
    });
    console.log("cantidad" + amountStart);
    console.log("description" + description);
    console.log("product" + v.id);
    console.log("user" + user.id);*/
  };

  const { data, loadingJSX, loading } = UsefetchParams<ShowReviewtype>({
    id: v.id,
    services: getReviews,
    update: false,
  });

  const sections = {
    Info: <Info handleAddItem={handleAddItem} />,
    Reserve: <Reserve />,
    Review: (
      <Review
        data={data}
        handleGetDes={handleGetDes}
        handlePost={handlePost}
        getAmountStarts={getAmountStarts}
        loadingJSX={loadingJSX}
        loading={loading}
      />
    ),
  };

  return (
    <div className={styles.containerFather}>
      <Image
        width={100}
        height={100}
        className={styles.img}
        src={v.photo}
        alt="Empanada de carne"
      />

      <div className={styles.containerContent}>
        <h3 className={styles.tittleProduct}>{v.name}</h3>
        <p className={styles.contentProduct}>{v.description}</p>
      </div>

      <div className={styles.conteinerPrice}>
        <h2>{v.price}BSxUnid</h2>
        <ButtonsChange section={section} setSection={setSection} />
        <p className={styles.borderPriceProduct}></p>
      </div>

      {sections[section]}
    </div>
  );
};

export default ContenModal;
