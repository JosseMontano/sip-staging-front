import styles from "../styles/alert.module.css"
import Alert from "../assets/warning.png"

const ContenModal = () => {

    return (
      <div class={styles.containerFather}>
        <img class={styles.img} src={Alert} alt="Alert" />
        <div class={styles.containerContentText}>
            <h2 class={styles.tittleProduct}>¿Quieres eliminar todos los productos de tu pedido?</h2>
            
        </div>

        <div class={styles.containerContentButton}>
            <button class={styles.button1}>Continuar con el pedido</button>
            <button class={styles.button2}>Si, eliminar todos</button>
        </div>
      </div>
    );
  }
  
  export default ContenModal