import { useState } from "preact/hooks"
import styles from "../../styles/review.module.css"
import Comment from "./comment"
import WriteReview from "./writeReview";

const Review = () => {
  const [write, setWrite] = useState(false);

  return (
    <div class={styles.commentsContainer}>
      <button onClick={() => setWrite(old => !old)}>
        {write ? "Ver reseñas" : "Escribir reseña"}
      </button>
      {
        write ? 
        <WriteReview /> :
        <>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </>
      }
    </div>
  )
}

export default Review