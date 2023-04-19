import { GetUserCompaniesType } from "@/interfaces/profile/getUser";
import React from "react";
import Companie from "./companie";
import styles from "@/styles/profile/companies.module.css";

interface Params {
  companies: GetUserCompaniesType | undefined;
}

const Companies = ({ companies }: Params) => {
  return (
    <div className={styles.container}>
      {companies?.companies &&
        companies.companies.map((v) => <Companie v={v} key={v.id} />)}
    </div>
  );
};

export default Companies;
