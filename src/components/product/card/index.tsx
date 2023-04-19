import { ProducType } from "@/interfaces/product/product";
import Image from "next/image";
import React from "react";
import styles from "@/styles/product/cards.module.css";
import { Modal } from "@/components/global/modal";
import ContenModal from "../../../components/product/contentModal/";
import { useModal } from "@/hooks/global/useModal";

interface Params {
  v: ProducType;
  handleChangeMst: (msg: string, operation: boolean) => void;
  numberCompany:string
}

const Index = ({ v, handleChangeMst, numberCompany }: Params) => {
  const { isShown, toggle } = useModal({ show: false });

  return (
    <>
      <div onClick={toggle} className={styles.container} key={v.id}>
        <Image
          className={styles.img}
          height={200}
          width={200}
          src={v.photo}
          alt=""
        />
        <h2>{v.name}</h2>
        <p>{v.description}</p>
        <span>{v.price}BS</span>
      </div>
      <Modal
        hide={toggle}
        isShown={isShown}
        modalContent={<ContenModal v={v} handleChangeMst={handleChangeMst} numberCompany={numberCompany} />}
      />
    </>
  );
};

export default Index;
