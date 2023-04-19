import styles from '@/styles/product/showProduct.module.css';
import { Section } from '@/interfaces/product/Section';
import {
  BsFillInfoCircleFill,
  BsFillCalendarCheckFill,
  BsFillStarFill
} from 'react-icons/bs';
import { IconType } from 'react-icons';
import ContentBtn from './contentBtn';
import { BtnJSXType } from '@/interfaces/product/btnjsx';

interface Props {
  setSection: any;
  section: string;
}

const ButtonsChange = ({ section, setSection }: Props) => {
  const btnJSX: BtnJSXType[] = [
    {
      icon: BsFillInfoCircleFill,
      text: 'Info',
      type: 'Info'
    },
    {
      icon: BsFillCalendarCheckFill,
      text: 'Reservar',
      type: 'Reserve'
    },
    {
      icon: BsFillStarFill,
      text: 'Reseñas',
      type: 'Review'
    }
  ];

  return (
    <div className={styles.buttonsContainer}>
      {btnJSX.map((v) => (
        <ContentBtn key={v.text} section={section} setSection={setSection} v={v} />
      ))}
    </div>
  );
};

export default ButtonsChange;
