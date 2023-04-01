import styles from "../../styles/review.module.css"

const Comment = () => {
  return (
    <div class={styles.commentContainer}>
      <div class={styles.commentHeader}>
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
        <div class={styles.commentHeaderText}>
          <h4>Elliane Ticse</h4>
          <div class={styles.commentHeaderSmall}>
            <div class={styles.commentStarContainer}>
              <small>5</small>
              <div class={styles.star}></div>
            </div>
            <p>12 Oct. 2022</p>
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam, 
        corrupti dolore doloremque vitae deserunt possimus quos quas recusandae 
        voluptatem veritatis? Illo dolorem ea fugiat blanditiis? In exercitationem eveniet placeat?
      </p>
    </div>
  )
}

export default Comment