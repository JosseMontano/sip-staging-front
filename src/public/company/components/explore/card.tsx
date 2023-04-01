import styles from '../../styles/index.module.css';
import ratingIcon from '../../assets/ratingicon.png';
import nearMeIcon from '../../assets/nearmeIcon.png';
import { CompaniesByCat } from '../../interfaces/companiesByCat';

interface Params {
  v: CompaniesByCat;
  handleClickCompany: (id: number) => void;
}

const Card = ({ handleClickCompany, v }: Params) => {
  return (
    <div class={styles.contenCali} onClick={()=>handleClickCompany(v.ID)}>
      <div>
        <h3>{v.name}</h3>
        <p>{v.description}</p>
      </div>
      <img src={v.photo} alt="Calificacion" />
    </div>
  );
};

export default Card;
