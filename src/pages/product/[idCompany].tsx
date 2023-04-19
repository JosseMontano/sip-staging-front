import styles from "@/styles/product/showinfo.module.css";
import { getCompany } from "@/services/product/company";
import { useEffect, useState } from "react";
import { CompanyType } from "@/interfaces/product/company";
import Company from "@/components/product/company";
import {
  downloadReportProducts,
  getProducts,
} from "@/services/product/product";
import { ProducType } from "@/interfaces/product/product";
import UsefetchParams from "@/hooks/global/usefetchParams";
import Image from "next/image";
import { useRouter } from "next/router";
import Categories from "@/components/product/categories";
import { getCategories } from "@/services/product/categoryProducts";
import { CategoryProductType } from "@/interfaces/product/categories";
import { CompaniesByCat } from "@/interfaces/company/companiesByCat";
import CardProducts from "@/components/product/card";
import Footer from "@/components/product/footer";
import Toast from "@/components/global/toast";
import { useModal } from "@/hooks/global/useModal";
import { Modal } from "@/components/global/modal";
import ModalHours from "@/components/product/modalHours";
interface Params {
  categories: CategoryProductType[];
  company: CompaniesByCat[];
}

const Index = ({}: Params) => {
  const router = useRouter();

  const { idCompany } = router.query;
  let idCompanyNumber = 0;

  idCompanyNumber = parseInt(idCompany?.toString() || "0");

  const [categoryId, setcategoryId] = useState(1);

  const [companyData, setCompanyData] = useState<Params>();

  useEffect(() => {
    const handleLoadData = async () => {
      const { data } = await getCompany(idCompanyNumber);
      setCompanyData(data);
      if (data.categories) {
        const objCat = Object.assign(data.categories[0], {});
        setcategoryId(objCat.id);
      }
    };

    if (idCompanyNumber) {
      handleLoadData();
    }
  }, [idCompanyNumber]);

  const [products, setProducts] = useState<ProducType[]>([]);

  useEffect(() => {
    const handleLoadData = async () => {
      const { data } = await getProducts<ProducType>(
        idCompanyNumber,
        categoryId
      );
      setProducts(data);
    };
    if (idCompanyNumber && categoryId) {
      handleLoadData();
    }
  }, [idCompanyNumber, categoryId]);

  const handleChangeCategory = (id: number) => {
    setcategoryId(id);
  };

  const [msgToast, setMsgToast] = useState("");
  const [colorToast, setColorToast] = useState("#333");

  const handleChangeMst = (msg: string, operation: boolean) => {
    const color = operation ? "#368e34" : "#c91212";
    setColorToast(color);
    setMsgToast(msg);
    setTimeout(() => {
      setMsgToast("");
    }, 3000);
  };

  const [loadReport, setLoadReport] = useState(false);
  const handleDownloadReport = async () => {
    setLoadReport(true);
    await downloadReportProducts(idCompanyNumber);
    setLoadReport(false);
  };

  //search
  const [searchInput, setSearchInput] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (v: ProducType) => {
    if (searchInput === "") {
      return v;
    }
    if (v.name.toLowerCase().includes(searchInput.toLowerCase())) {
      return v;
    }
  };

  //Hours
  const { isShown, toggle } = useModal({ show: false });


  return (
    <>
      <div>
        {companyData && (
          <div className={styles.container_content}>
            {companyData.company.map((v) => (
              <Company
                key={v.id}
                v={v}
                handleDownloadReport={handleDownloadReport}
                loadReport={loadReport}
                toggle={toggle}
              />
            ))}

            <Categories
              categoryId={categoryId}
              handleChangeCategory={handleChangeCategory}
              data={companyData?.categories}
              handleChangeInput={handleChangeInput}
              searchInput={searchInput}
            />

            <div className={styles.container_card}>
              {/*       {products.map((v) => (
                <CardProducts
                  v={v}
                  key={v.id}
                  handleChangeMst={handleChangeMst}
                  numberCompany={companyData.company[0].phone_number}
                />
              ))} */}

              {products
                .filter((v) => {
                  const res = handleSearch(v);
                  return res;
                })
                .map((v, i) => (
                  <CardProducts
                    v={v}
                    key={v.id}
                    handleChangeMst={handleChangeMst}
                    numberCompany={companyData.company[0].phone_number}
                  />
                ))}
            </div>

            <Footer />
          </div>
        )}
      </div>
      {msgToast && <Toast msg={msgToast} color={colorToast} />}

      <Modal
        hide={toggle}
        isShown={isShown}
        modalContent={<ModalHours idCompany={idCompanyNumber} />}
      />
    </>
  );
};

export default Index;
