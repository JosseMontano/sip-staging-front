import styles from '@/styles/company/index.module.css';
import ratingIcon from '../../assets/ratingicon.png';
import nearMeIcon from '../../assets/nearmeIcon.png';
import { CompaniesByCat } from '@/interfaces/company/companiesByCat';
import Image from 'next/image';


interface Params {
  v: CompaniesByCat;
  handleClickCompany: (id: number, name:string) => void;
}

const Card = ({ handleClickCompany, v }: Params) => {
  
  return (
    <div className={styles.contenCali} onClick={()=>handleClickCompany(v.id, v.name)}>
      <div>
        <h3>{v.name}</h3>
        <p>{v.description}</p>
      </div>
      <Image src={v.photo} alt="Calificacion" width={100}  height={100}/>
    </div>
  );
};

export default Card;
