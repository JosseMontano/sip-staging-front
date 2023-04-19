import styles from "@/styles/product/review.module.css";
import Start from "../../../components/starts";
import { ChangeEvent, useState } from "react";
import { UseUser } from "@/store/user";


interface Params{
  getgetAmountStarts:(val: number)=>void;
  handleGetDes:(val:ChangeEvent<HTMLTextAreaElement>)=>void;
  handlePost:()=>void;
}


const WriteReview = ({ getgetAmountStarts, handleGetDes, handlePost }: Params) => {
  const { user } = UseUser();


  return (
    <div className={styles.writeReviewContainer}>
      <h4>Calificación</h4>
      <Start getAmountStarts={getgetAmountStarts} />
      <h4>Reseña</h4>
      <textarea
        onChange={(e) => handleGetDes(e)}
        className={styles.writeReviewTextArea}
      ></textarea>
      <button onClick={handlePost}>Enviar</button>
    </div>
  );
};

export default WriteReview;
