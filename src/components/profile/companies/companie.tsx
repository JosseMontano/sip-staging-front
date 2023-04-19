import { CompaniesByCat } from "@/interfaces/company/companiesByCat";
import Image from "next/image";
import React from "react";
import styles from "@/styles/profile/companies.module.css";

interface Params {
  v: CompaniesByCat;
}

const Companie = ({ v }: Params) => {
  return (
    <div key={v.id}>
      <Image
        className={styles.Img}
        src={v.photo}
        alt="Foto de la empresa"
        width={200}
        height={200}
      />
    </div>
  );
};

export default Companie;
