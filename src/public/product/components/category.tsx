import { BiFoodMenu } from 'react-icons/bi';
import { MdFastfood } from 'react-icons/md';
import { MdLocalDrink } from 'react-icons/md';
import { GiChickenOven } from 'react-icons/gi';
import { GiChipsBag } from 'react-icons/gi';
import { GiCakeSlice } from 'react-icons/gi';
import styles from '../../product/styles/showinfo.module.css';
import { CategoryProductType } from '../interfaces/categories';

interface Params {
  v: CategoryProductType;
  handleChangeCategory: (id: number) => void;
  categoryId: number;
}

const Category = ({ v, handleChangeCategory, categoryId }: Params) => {
  // + styles.active

  let containerActiveS = categoryId == v.ID ? styles.active : '';

  let stylesGeneral = styles.Opt + ' ' + containerActiveS;

  return (
    <div class={stylesGeneral} onClick={() => handleChangeCategory(v.ID)}>
      <div class={styles.container_icon}>
        <MdFastfood />
      </div>
      {v.name}
    </div>
  );
};

export default Category;
