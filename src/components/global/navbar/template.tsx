import styles from "@/styles/global/navbar.module.css";
import ImgBoth from "@/assets/global/img/user.png";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsFillCartFill } from "react-icons/bs";
import { UseNameNav } from "@/store/nameNavbar";
import ImgMan from "@/assets/profile/userMan.png";
import ImgWoman from "@/assets/profile/userWoman.png";
import { UseUser } from "@/store/user";
import { useShoppingCar } from "@/store/shoppingCar";
import { BsFillTrashFill } from "react-icons/bs";
import { useModal } from "@/hooks/global/useModal";
import { Modal } from "../modal";
import ContenWarning from "../contenAlert";
import { useState } from "react";

interface Params {
  relativeStyle?: any;
}

const Template = ({ relativeStyle }: Params) => {
  const router = useRouter();
  const { name, changeName } = UseNameNav();
  const { user } = UseUser();
  const { items, clearCar } = useShoppingCar();
  const { isShown, toggle } = useModal({ show: false });


  let imgSex = user.gender == "Masculino" ? ImgMan : ImgWoman;

  let img = user.id == 0 ? ImgBoth : imgSex;

  const redirect = (url: string) => {
    router.push(url);
  };

  const handleClick = () => {
    redirect("/company");
    changeName("infoshop");
  };

  let stylesContainer = relativeStyle ? relativeStyle : styles.container_header;

  const currentPath = router.asPath;

  const handleShowCar = () => {
    return (
      <div
        onClick={() => redirect("/car")}
        className={styles.container_ShoppCar}
      >
        <BsFillCartFill size={30} />
        <p>{items.length}</p>
      </div>
    );
  };

  const deleteCar = async() => {
    toggle();
  };

  const handleShowTrash = () => {
    return (
      <div onClick={deleteCar} className={styles.container_ShoppCar}>
        <BsFillTrashFill size={30} />
      </div>
    );
  };

  return (
    <nav className={stylesContainer}>
      <div className={styles.company}>
        <h2 onClick={handleClick}>{name}</h2>
      </div>

      <div className={styles.container_profile}>
        <div className={styles.content}>
          <BiSearch size={32} />

          {currentPath == "/car" ? handleShowTrash() : handleShowCar()}

          <Image
            onClick={() => redirect("/profile")}
            src={img}
            alt="user"
            width={200}
            height={200}
          />
        </div>
      </div>
      <Modal
        hide={toggle}
        isShown={isShown}
        modalContent={<ContenWarning clearCar={clearCar} toggle={toggle}/>}
      />
    </nav>
  );
};

export default Template;
