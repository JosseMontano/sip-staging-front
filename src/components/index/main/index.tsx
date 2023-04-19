import React from "react";
import styles from "@/styles/index/main.module.css";
import Image from "next/image";
import Img from "../../../assets//index/header.png";
const Index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content_container}>
          <h2>Bring your code, we will handle the rest.</h2>
          <p>
            Made for any language, for projects big and small. Railway is the
            cloud that takes the complexity out of shipping software
          </p>
          <button className={styles.btn}>Start a new project</button>
        </div>
      </div>
      <div>
        <Image className={styles.img} src={Img} width={600} height={400} alt="Imagen de inicio" />
      </div>
    </div>
  );
};

export default Index;
