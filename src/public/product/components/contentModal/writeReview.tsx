import styles from "../../styles/review.module.css"

const WriteReview = () => {
  return (
    <div class={styles.writeReviewContainer}>
      <h4>Calificación</h4>
      <div class={styles.writeStarsContainer}>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <h4>Reseña</h4>
      <textarea class={styles.writeReviewTextArea}></textarea>
    </div>
  )
}

export default WriteReview