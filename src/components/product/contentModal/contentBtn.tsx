
import styles from '@/styles/product/showProduct.module.css';
import { BtnJSXType } from '@/interfaces/product/btnjsx';
import { Section } from '@/interfaces/product/Section';

interface Params {
  setSection: any;
  v: BtnJSXType;
  section: string;
}

const ContentBtn = ({ section, setSection, v }: Params) => {
  let activeStyle = styles.content + ' ';

  activeStyle += v.type == section ? styles.active : '';

  return (
    <div className={activeStyle} onClick={() => setSection(v.type)}>
      <div className={styles.container_icon}>
        <v.icon size={20} />
      </div>
      <p>{v.text}</p>
    </div>
  );
};

export default ContentBtn;
