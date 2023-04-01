import styles from '../product/styles/showinfo.module.css';
import { useModal } from '@/hooks/useModal';
import { Modal } from '@/components/modal';
import ContenModal from './components/contenModal';
import { getCompany } from './services/company';
import { useEffect, useState } from 'preact/hooks';
import { CompanyType } from './interfaces/company';
import Company from './components/company';
import Category from './components/category';
import { getCategories } from './services/categoryProducts';
import { CategoryProductType } from './interfaces/categories';
import { getProducts } from './services/product';
import { ProducType } from './interfaces/product';
import UsefetchParams from '@/hooks/usefetchParams';
interface Params {
  idCompany: number;
}

const Index = ({ idCompany }: Params) => {
  const { isShown, toggle } = useModal({ show: false });

  const [categoryId, setcategoryId] = useState(1);

  const { data: products } = UsefetchParams<ProducType>({
    services: getProducts,
    id: categoryId,
    update: true
  });

  const { data: company } = UsefetchParams<CompanyType>({
    services: getCompany,
    id: idCompany,
    update: false
  });

  const { data: categories } = UsefetchParams<CategoryProductType>({
    services: getCategories,
    id: idCompany,
    update: false
  });

  const handleChangeCategory = (id: number) => {
    setcategoryId(id);
  };

  return (
    <div>
      <div class={styles.container_content}>
        {company.map((v) => (
          <Company v={v} />
        ))}

        <div class={styles.container_menu}>
          <div class={styles.container_search}>
            <input type="text" placeholder="¿Qué vas a comer hoy?" />
          </div>
          <div class={styles.container_buttons}>
            {categories.map((v) => (
              <Category
                v={v}
                handleChangeCategory={handleChangeCategory}
                categoryId={categoryId}
              />
            ))}
          </div>
        </div>

        <div>
          {products.map((v) => (
            <div>
              <img src={v.photo} alt="" />
              <h2>{v.name}</h2>
              <p>{v.description}</p>
              <br />
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>

      <button onClick={toggle}>ok</button>
      <Modal hide={toggle} isShown={isShown} modalContent={<ContenModal />} />
    </div>
  );
};

export default Index;
