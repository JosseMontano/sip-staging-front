import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { MdDevicesOther } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IconType } from "react-icons";
import styles from "@/styles/index/features.module.css"

interface IconsJSXType {
  icon: IconType;
  name: string;
}

const Index = () => {
  const iconsJSX: IconsJSXType[] = [
    {
      icon: HiOutlineBuildingStorefront,
      name: "Empresa",
    },
    {
      icon: MdOutlinePeopleAlt,
      name: "Personas",
    },
    {
      icon: MdDevicesOther,
      name: "Dispositivos, ",
    },
  ];

  return (
    <div className={styles.container_father}>
      <div className={styles.container_title}>
        <h2>Características</h2>
      </div>
      <div className={styles.container_menu}>
        {iconsJSX.map((v) => (
          <div key={v.name} className={styles.container_option}>
            <div>
              <v.icon size={"3em"} color={"#872612"} />
            </div>
            <p>{v.name}</p>
          </div>
        ))}
      </div>
      <div className={styles.container_content}>
        <div className={styles.container_info}>
          <p>
            <b>{"> "}</b>Desde la configuración es posible personalizar SIVI
            para adaptarlo a tu Institución. Cambiando fechas de incripción,
            matriculación y exámenes. Además perimte activar el chequeo de
            correlatividades.
          </p>
          <p>
            <b>{"> "}</b>La plataforma cuenta con un sistema de carga inicial de
            datos que permite utilizar SIVI inmediatamente sin que los
            administrativos carguen toda la información histórica de los
            alumnos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
