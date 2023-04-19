import { ChangeEvent, useEffect, useState } from "react";
import styles from "@/styles/product/review.module.css";
import Comment from "./comment";
import WriteReview from "./writeReview";
import { getReviews } from "@/services/product/reviews";
import { ReviewType, ShowReviewtype } from "@/interfaces/product/review";
import { ProducType } from "@/interfaces/product/product";

interface Params {
  getAmountStarts: (val: number) => void;
  handleGetDes: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handlePost: () => void;
  data: ShowReviewtype[];
  loadingJSX: () => JSX.Element | undefined;
  loading: boolean;
}

const Review = ({
  getAmountStarts,
  handleGetDes,
  handlePost,
  data,
  loadingJSX,
  loading,
}: Params) => {
  const [write, setWrite] = useState(false);

  function showJSX() {
    return data && data.map((v) => <Comment v={v} key={v.id} />);
  }

  return (
    <div className={styles.commentsContainer}>
      <button onClick={() => setWrite((old) => !old)}>
        {write ? "Ver reseñas" : "Escribir reseña"}
      </button>
      {write ? (
        <WriteReview
          getgetAmountStarts={getAmountStarts}
          handleGetDes={handleGetDes}
          handlePost={handlePost}
        />
      ) : (
        <>{loading ? loadingJSX() : showJSX()}</>
      )}
    </div>
  );
};

export default Review;
