import styles from "@/styles/company/card.module.css";
import Carousel from "@/components/global/carousel";
import { Ref } from "react";
import { Company } from "@/interfaces/company/company";
import ContentCard from "./contentCard";

interface Params {
  slide: Ref<HTMLDivElement>;
  data: Company[];
  handleChangeCat: (id: number, title: string) => void;
  idCat: number;
}

const Card = ({ handleChangeCat, data, slide, idCat }: Params) => {
  return (
    <>
      <h1>Categorías</h1>

      <Carousel slide={slide}>
        <div ref={slide} className={styles.card + " " + "slide"}>
          {data.map((v) => (
            <ContentCard
              idCat={idCat}
              key={v.id}
              v={v}
              handleChangeCat={handleChangeCat}
            />
          ))}
        </div>
      </Carousel>
    </>
  );
};

export default Card;
