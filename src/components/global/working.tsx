import Image from "next/image";
import React from "react";
import Img from "@/assets/global/img/working.png";
import styles from "@/styles/global/working.module.css";
const Working = () => {
  return (
    <div className={styles.working}>
      <div className={styles.container}>
        <Image className={styles.image} src={Img} alt="" />
        <p>Próximamente disfrutaras de esta funcionalidad</p>
      </div>
    </div>
  );
};

export default Working;
