import { Company } from '../interfaces/company';

interface Parmas {
  v: Company;
  handleChangeCat: (id: number, title:string) => void;
}

const ContentCard = ({ v, handleChangeCat }: Parmas) => {
  return (
    <div onClick={() => handleChangeCat(v.ID, v.name)}>
      <img src={v.photo} alt="" />
      <h3>{v.name}</h3>
    </div>
  );
};

export default ContentCard;
