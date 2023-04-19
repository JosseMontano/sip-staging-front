import React, { useState } from "react";
import styles from "@/styles/product/categories.module.css";
import Category from "./category";
import { CategoryProductType } from "@/interfaces/product/categories";

interface Params {
  handleChangeCategory: (id: number) => void;
  categoryId: number;
  data: CategoryProductType[];
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchInput: string;
}

const Categories = ({
  categoryId,
  handleChangeCategory,
  data,
  handleChangeInput,
  searchInput,
}: Params) => {
  return (
    <div className={styles.container_menu}>
      <div className={styles.container_search}>
        <input
          value={searchInput}
          onChange={(e) => handleChangeInput(e)}
          type="text"
          placeholder="¿Qué vas a comer hoy?"
        />
      </div>
      <div className={styles.container_buttons}>
        {data &&
          data.map((v) => (
            <Category
              key={v.id}
              v={v}
              handleChangeCategory={handleChangeCategory}
              categoryId={categoryId}
            />
          ))}
      </div>
    </div>
  );
};

export default Categories;
