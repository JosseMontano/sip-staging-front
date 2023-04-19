import { ShoppingCarType } from "@/interfaces/global/shoppingCar";
import styles from "@/styles/product/showProduct.module.css";
import { useState } from "react";

interface Params {
  handleAddItem: (amount: number) => void;
}

const Info = ({ handleAddItem }: Params) => {
  const [amount, setAmount] = useState(1);

  const handleSum = () => {
    setAmount(amount + 1);
  };

  const handleRes = () => {
    if (amount != 1) {
      setAmount(amount - 1);
    }
  };

  const handleAddCar = () => {
    handleAddItem(amount)
  };
  return (
    <div className={styles.infoContainer}>
      <div className={styles.containerDetailsOrder}>
        <div className={styles.containerAmountProduct}>
          <div className={styles.textAmountProduct}>
            <p>Cantidad</p>
          </div>
          <div className={styles.buttonAmountProduct}>
            <button onClick={handleRes} className={styles.buttonAmount}>
              -
            </button>
            <p className={styles.amount}>{amount}</p>
            <button onClick={handleSum} className={styles.buttonAmount}>
              +
            </button>
          </div>
        </div>
        <div className={styles.containerSpecicationsProduct}>
          <p>Aclaracion sobre la comida</p>
          <input
            className={styles.specificationsProduct}
            type="text"
            placeholder="Escribe aqui"
          />
        </div>
      </div>

      <button onClick={handleAddCar} className={styles.buttonOrder}>
        Agregar al pedido
      </button>
    </div>
  );
};

export default Info;
