import Image from "next/image";
import styles from "@/styles/company/card.module.css";
import { Company } from "@/interfaces/company/company";

interface Parmas {
  v: Company;
  handleChangeCat: (id: number, title: string) => void;
  idCat: number;
}

const ContentCard = ({ v, handleChangeCat, idCat }: Parmas) => {
  let activeStyle = " ";

  if (idCat === v.id) {
    activeStyle = styles.active;
  }

  return (
    <div
      className={"imgCategory" + " " + activeStyle}
      onClick={() => handleChangeCat(v.id, v.name)}
    >
      <Image src={v.photo} alt="ok" width={200} height={200} />
      <h3>{v.name}</h3>
      <style jsx global>{`
        .imgCategory:hover {
          cursor: pointer;
          transform: scale(1.1);
          color: var(--first);
        }
      `}</style>
    </div>
  );
};

export default ContentCard;
