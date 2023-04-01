import styles from "../../styles/showProduct.module.scss"

const Info = () => {
  return (
    <div class={styles.infoContainer}>
      <div class={styles.containerDetailsOrder}>
        <div class={styles.containerAmountProduct}>
          <div class={styles.textAmountProduct}>
            <p>Cantidad</p>
          </div>
          <div class={styles.buttonAmountProduct}>
            <button class={styles.buttonAmount}>-</button>
            <p class={styles.amount}>1</p>
            <button class={styles.buttonAmount}>+</button>
          </div>
        </div>
        <div class={styles.containerSpecicationsProduct}>
          <p>Aclaracion sobre la comida</p>
          <input class={styles.specificationsProduct} type="text" placeholder="Escribe aqui" />
        </div>
      </div>
        
      <button class={styles.buttonOrder}>Agregar al pedido</button>
    </div>
  )
}

export default Info