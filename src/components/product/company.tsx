import styles from "@/styles/product/showinfo.module.css";
import { CompanyType } from "@/interfaces/product/company";
import Hour from "./hour";
import Image from "next/image";
import { useModal } from "@/hooks/global/useModal";
import { CompaniesByCat } from "@/interfaces/company/companiesByCat";

interface Params {
  v: CompaniesByCat;
  handleDownloadReport: () => Promise<void>;
  loadReport: boolean;
  toggle: () => void;
}

const Company = ({ v, handleDownloadReport, loadReport, toggle }: Params) => {
  const textBtn = loadReport ? "Cargando" : "Mostrar Menu en PDF";

  return (
    <div key={v.id} className={styles.container_top}>
      <div className={styles.container_imagetop}>
        <Image
          className={styles.img}
          src={v.photo}
          alt="Foto de la compañia"
          width={200}
          height={200}
        />
      </div>
      <div className={styles.container_contentInfo}>
        <h2>{v.name}</h2>

        <p>{v.description}</p>
        <p>{v.address}</p>
        <div className={styles.container_info}>
          <p>
            <b>Horarios: </b>
            {v.hours.map((hour) => (
              <Hour key={v.id} v={hour} />
            ))}
          </p>
        </div>

        <button className="btn_second" onClick={handleDownloadReport}>
          {textBtn}
        </button>
        <button className="btn_second" onClick={toggle}>
          Horarios
        </button>
      </div>
    </div>
  );
};

export default Company;
