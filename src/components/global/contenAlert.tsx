import styles from "@/styles/global/alert.module.css";
import Alert from "@/assets/global/img/warning.png";
import Image from "next/image";

interface Params {
  clearCar: () => void;
  toggle: () => void;
}

const ContenWarning = ({ clearCar, toggle }: Params) => {
  const handleRespAlert = (op: boolean) => {
    if (op) {
      clearCar();
      return;
    }
    toggle();
  };

  return (
    <div className={styles.containerFather}>
      <Image
        className={styles.img}
        src={Alert}
        alt="Alert"
        width={200}
        height={200}
      />
      <div className={styles.containerContentText}>
        <h2 className={styles.tittleProduct}>
          ¿Quieres eliminar todos los productos de tu pedido?
        </h2>
      </div>

      <div className={styles.containerContentButton}>
        <button
          onClick={() => handleRespAlert(false)}
          className={styles.button1}
        >
          Continuar con el pedido
        </button>
        <button
          onClick={() => handleRespAlert(true)}
          className={styles.button2}
        >
          Si, eliminar todos
        </button>
      </div>
    </div>
  );
};

export default ContenWarning;
