import { ComponentChildren } from 'preact';
import { CompaniesByCat } from '../../interfaces/companiesByCat';
import styles from '../../styles/index.module.css';
import Card from './card';

interface Params {
  companies: CompaniesByCat[];
  showMsgEmpty: () => ComponentChildren | undefined;
  titleCat: string;
  handleClickCompany: (id: number) => void;
}

const Index = ({ handleClickCompany, titleCat, showMsgEmpty, companies }: Params) => {
  return (
    <>
      <h1>Explora por {titleCat}</h1>
      <div class={styles.contenRecomend}>
        {companies.map((v) => (
          <Card v={v} handleClickCompany={handleClickCompany} />
        ))}
        {showMsgEmpty()}
      </div>
    </>
  );
};

export default Index;

/* 

  <div class={styles.nearMe}>
          <div>
            <h3>Cerca de mi</h3>
            <p>Explora restaurantes cerca a tu ubicación</p>
          </div>
          <img src={nearMeIcon} alt="Cerca de mi" />
        </div>
*/
