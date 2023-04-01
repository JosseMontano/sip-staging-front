import styles from '../styles/showinfo.module.css';
import { CompanyType } from '../interfaces/company';
import Hour from './hour';

interface Params {
  v: CompanyType;
}

const Company = ({ v }: Params) => {
  return (
    <div class={styles.container_top}>
      <div class={styles.container_imagetop}>
        <img src={v.photo} alt="" />
      </div>
      <div>
        <h2>Pedido online</h2>
        <p>{v.description}</p>
        <div class={styles.container_info}>
          {v.hours.map((hour) => (
            <Hour v={hour} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;
