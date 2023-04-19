import Image from "next/image"
import styles from "@/styles/product/review.module.css"
import ImgUser from "@/assets/global/img/user.png"
import { ReviewType, ShowReviewtype } from "@/interfaces/product/review";
import { ProducType } from "@/interfaces/product/product";


interface Params{
  v:ShowReviewtype
}  

const Comment = ({v}:Params) => {

  
  return (
    <div className={styles.commentContainer}>
      <div className={styles.commentHeader}>
        <Image  height={200} width={200} alt="comment" src={ImgUser} />
        <div className={styles.commentHeaderText}>
          <h4>{v.user_name}</h4>
          <div className={styles.commentHeaderSmall}>
            <div className={styles.commentStarContainer}>
              <small>{v.qualification}</small>
              <div className={styles.star}></div>
            </div>
            <p>{v.Date}</p>
          </div>
        </div>
      </div>
      <p>
        {v.description}
      </p>
    </div>
  )
}

export default Comment