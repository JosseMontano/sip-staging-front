import styles from "@/styles/company/index.module.css";
import Card from "./card";
import { CompaniesByCat } from "@/interfaces/company/companiesByCat";

interface Params {
  companies: CompaniesByCat[];
  showMsgEmpty: () => JSX.Element | undefined;
  titleCat: string;
  handleClickCompany: (id: number, name:string) => void;
}

const Index = ({
  handleClickCompany,
  titleCat,
  showMsgEmpty,
  companies,
}: Params) => {
  return (
    <>
      <h1>
        Explora por <span>{titleCat}</span>
      </h1>
      <div className={styles.contenRecomend}>
        {companies.map((v) => (
          <Card key={v.id} v={v} handleClickCompany={handleClickCompany} />
        ))}
        {showMsgEmpty()}
      </div>
    </>
  );
};

export default Index;

/* 

  <div className={styles.nearMe}>
          <div>
            <h3>Cerca de mi</h3>
            <p>Explora restaurantes cerca a tu ubicación</p>
          </div>
          <img src={nearMeIcon} alt="Cerca de mi" />
        </div>
*/
