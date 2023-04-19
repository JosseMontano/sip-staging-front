import { useEffect, useState } from "react";
import styles from "@/styles/index/header.module.css";
import ImgScanMenu from "@/assets/index/background.jpg";
import Title from "./title";
import Description from "./description";
import { BtnTest } from "./btnTest";
import Image from "next/image";
import { useRouter } from "next/router";

const Index = () => {
  const [title, setTitle] = useState("Gestiona tus clientes");
  const router = useRouter();

  useEffect(() => {
    const changeText = () => {
      setTimeout(() => {
        setTitle(
          title === "Gestiona tus clientes"
            ? "Gestiona tus comidas"
            : "Gestiona tus clientes"
        );
      }, 2000);
    };
    changeText();
  }, [title]);

  const handleClick = () => {
    router.push("/auth");
  };

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <div className={styles.container_text}>
          <Title title={title} />
          <Description />
          <BtnTest handleClick={handleClick} />
        </div>
      </div>

      <div className={styles.wave}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,32L48,58.7C96,85,192,139,288,133.3C384,128,480,64,576,58.7C672,53,768,107,864,160C960,213,1056,267,1152,282.7C1248,299,1344,277,1392,266.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Index;
