import { StateUpdater } from 'preact/hooks';
import styles from '../../styles/showProduct.module.scss';
import { BtnJSXType } from '../../interfaces/btnjsx';
import { Section } from '../../interfaces/Section';

interface Params {
  setSection: StateUpdater<Section>;
  v: BtnJSXType;
  section: string;
}

const ContentBtn = ({ section, setSection, v }: Params) => {
  let activeStyle = styles.content + ' ';

  activeStyle += v.type == section ? styles.active : '';

  return (
    <div class={activeStyle} onClick={() => setSection(v.type)}>
      <div class={styles.container_icon}>
        <v.icon size={20} />
      </div>
      <p>{v.text}</p>
    </div>
  );
};

export default ContentBtn;
