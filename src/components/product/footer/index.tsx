import React from "react";
import styles from "@/styles/product/footer.module.css";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { FaTiktok } from "react-icons/fa";

const Index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <AiOutlineInstagram className={styles.icon} size={40} />
        <FaTiktok className={styles.icon} size={40} />
        <CgFacebook className={styles.icon} size={40} />
        <AiOutlineWhatsApp className={styles.icon} size={40} />
      </div>
      <h4>Todos los derechos reservados</h4>
    </div>
  );
};

export default Index;
