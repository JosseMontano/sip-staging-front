import styles from "../../styles/features.module.scss";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { BiFoodMenu } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { RiSmartphoneLine } from "react-icons/ri";
import { IconType } from "react-icons";
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
      icon: BiFoodMenu,
      name: "Menu",
    },
    {
      icon: AiOutlineStar,
      name: "Calificacion",
    },
    {
      icon: RiSmartphoneLine,
      name: "Dispositivos, ",
    },
  ];

  return (
    <div class={styles.container_father}>
      <div class={styles.container_title}>
        <h2>Características</h2>
      </div>
      <div class={styles.container_menu}>
        {iconsJSX.map((v) => (
          <div class={styles.container_option}>
            <div>
              <v.icon size={"3em"} color={"#872612"} />
            </div>
            <p>{v.name}</p>
          </div>
        ))}
      </div>
      <div class={styles.container_content}>
        <div class={styles.container_info}>
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
