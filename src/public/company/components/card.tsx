import styles from '../styles/card.module.css';
import Carousel from '@/components/carousel';
import { Ref } from 'preact';
import Bar from '../assets/bar.png';
import Coffe from '../assets/cafeteria.png';
import Pizza from '../assets/pizzeria.png';
import Medicine from '../assets/medicine.png';
import { Company } from '../interfaces/company';
import ContentCard from './contentCard';
import { CompaniesByCat } from '../interfaces/companiesByCat';

interface Params {
  slide: Ref<HTMLDivElement>;
  data: Company[];
  handleChangeCat: (id: number, title:string) => void;
}

const Card = ({ handleChangeCat, data, slide }: Params) => {
  const url =
    'https://brandemia.org/contenido/subidas/2022/10/marca-mcdonalds-logo-1200x670.png';
  return (
    <>
      <h1>Categorías</h1>

      <Carousel
        slide={slide}
        children={
          <div ref={slide} class={styles.card + ' ' + 'slide'}>
            {data.map((v) => (
              <ContentCard v={v} handleChangeCat={handleChangeCat} />
            ))}
          </div>
        }
      />
    </>
  );
};

export default Card;
