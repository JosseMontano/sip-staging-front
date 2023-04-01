import { Company } from './interfaces/company';
import styles from './styles/index.module.css';
import { useRef, useState } from 'preact/hooks';
import Card from './components/card';
import Usefetch from '@/hooks/usefetch';
import { getCompaniesByCat, getCompany } from './api/company';
import Explore from './components/explore';
import { CompaniesByCat } from './interfaces/companiesByCat';
import UsefetchParams from '@/hooks/usefetchParams';
import { route } from 'preact-router';

const Index = () => {
  const { data, loading } = Usefetch<Company>({ services: getCompany });
  const [idCat, setIdCat] = useState(1);
  const [titleCat, setTitleCat] = useState('Comida');

  const handleChangeCat = (id: number, title: string) => {
    setIdCat(id);
    setTitleCat(title);
  };

  const handleClickCompany = (id: number) => {
    route('/product/' + id);
  };

  const {
    data: companies,
    loading: loadingCompanies,
    showMsgEmpty
  } = UsefetchParams<CompaniesByCat>({
    services: getCompaniesByCat,
    id: idCat,
    update: true
  });

  const slide = useRef<HTMLDivElement>(null);

  return (
    <div class={styles.container_card}>
      <Card handleChangeCat={handleChangeCat} data={data} slide={slide} />
      <Explore
        handleClickCompany={handleClickCompany}
        titleCat={titleCat}
        companies={companies}
        showMsgEmpty={showMsgEmpty}
      />
    </div>
  );
};

export default Index;
