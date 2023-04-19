import { Company } from "@/interfaces/company/company";
import styles from "@/styles/company/index.module.css";
import { useRef, useState } from "react";
import Card from "@/components/company/card";
import Usefetch from "@/hooks/global/usefetch";
import Explore from "@/components/company/explore";
import { CompaniesByCat } from "@/interfaces/company/companiesByCat";
import UsefetchParams from "@/hooks/global/usefetchParams";
import { getCompaniesByCat, getCompany } from "@/services/company/company";
import { useRouter } from "next/router";
import UseAuth from "@/hooks/global/useAuth";
import { UseNameNav } from "@/store/nameNavbar";


interface Params {}

const Index = ({}: Params) => {
  const { data, loading } = Usefetch<Company>({ services: getCompany });
  const [idCat, setIdCat] = useState(1);
  const [titleCat, setTitleCat] = useState("Comida");
  const router = useRouter();
  const { changeName } = UseNameNav();
  UseAuth();

  const handleChangeCat = (id: number, title: string) => {
    setIdCat(id);
    setTitleCat(title);
  };

  const handleClickCompany = (id: number, name: string) => {
    changeName(name);
    router.push("/product/" + id);
  };

  const {
    data: companies,
    loading: loadingCompanies,
    showMsgEmpty,
  } = UsefetchParams<CompaniesByCat>({
    services: getCompaniesByCat,
    id: idCat,
    update: true,
  });

  const slide = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.container_card}>
      <Card
        idCat={idCat}
        handleChangeCat={handleChangeCat}
        data={data}
        slide={slide}
      />
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
