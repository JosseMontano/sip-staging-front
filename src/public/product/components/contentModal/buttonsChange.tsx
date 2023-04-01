import { StateUpdater } from 'preact/hooks';
import styles from '../../styles/showProduct.module.scss';
import { Section } from '../../interfaces/Section';
import {
  BsFillInfoCircleFill,
  BsFillCalendarCheckFill,
  BsFillStarFill
} from 'react-icons/bs';
import { IconType } from 'react-icons';
import ContentBtn from './contentBtn';
import { BtnJSXType } from '../../interfaces/btnjsx';

interface Props {
  setSection: StateUpdater<Section>;
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
    <div class={styles.buttonsContainer}>
      {btnJSX.map((v) => (
        <ContentBtn section={section} setSection={setSection} v={v} />
      ))}
    </div>
  );
};

export default ButtonsChange;
