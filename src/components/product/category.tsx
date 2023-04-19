import { BiFoodMenu } from 'react-icons/bi';
import { MdFastfood } from 'react-icons/md';
import { MdLocalDrink } from 'react-icons/md';
import { GiChickenOven } from 'react-icons/gi';
import { GiChipsBag } from 'react-icons/gi';
import { GiCakeSlice } from 'react-icons/gi';
import styles from '@/styles/product/categories.module.css';
import { CategoryProductType } from '@/interfaces/product/categories';


interface Params {
  v: CategoryProductType;
  handleChangeCategory: (id: number) => void;
  categoryId: number;
}

const Category = ({ v, handleChangeCategory, categoryId }: Params) => {
  // + styles.active

  let containerActiveS = categoryId == v.id ? styles.active : '';

  let stylesGeneral = styles.Opt + ' ' + containerActiveS;

  return (
    <div className={stylesGeneral} onClick={() => handleChangeCategory(v.id)}>
      <div className={styles.container_icon}>
        <MdFastfood />
      </div>
      {v.name}
    </div>
  );
};

export default Category;
