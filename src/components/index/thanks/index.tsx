import React from "react";
import Dev from "../../../assets/index/thanks/dev.png";
import Iconos8 from "../../../assets/index/thanks/iconos8.png";
import Leaflet from "../../../assets/index/thanks/leaflet.png";
import Image from "next/image";
import styles from "@/styles/index/thanks.module.css";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const hanldeRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section className={styles.container}>
      <h3>Todo esto posible gracias a:</h3>
      <div className={styles.icons}>
        <Image
          src={Dev}
          alt="Dev"
          width={100}
          height={100}
          onClick={() => {
            router.push("/developers");
          }}
        />
        <Image
          className={styles.leaflet}
          src={Leaflet}
          alt="Dev"
          width={100}
          height={100}
          onClick={() => hanldeRedirect("https://leafletjs.com/")}
        />
        <Image
          onClick={() => hanldeRedirect("https://iconos8.es/")}
          src={Iconos8}
          alt="Dev"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};

export default Index;
