import { ShoppingCarType } from "@/interfaces/global/shoppingCar";
import React, { useState } from "react";
import styles from "@/styles/car/card.module.css";
interface Params {
  v: ShoppingCarType;
  handleRemoveItem: (id: number) => void;
  updateCar: (id: number, quantity: number) => void;
}

const Index = ({ v, handleRemoveItem, updateCar }: Params) => {
  const [amount, setAmount] = useState(v.amount);

  const handleSum = (id: number, amount: number) => {
    updateCar(id, amount + 1);
    setAmount(amount + 1);
  };

  const handleRes = (id: number, amount: number) => {
    if (amount != 1) {
      updateCar(id, amount - 1);
      setAmount(amount - 1);
    }
  };

  return (
    <div className={styles.card} key={v.id}>
      <div className={styles.remove}>
        <p onClick={() => handleRemoveItem(v.id)}>X</p>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h2>{v.name}</h2>
          <p>{v.description}</p>
        </div>

        <div className={styles.price}>
          <div className={styles.container_btn}>
            <button onClick={() => handleRes(v.id, v.amount)}>-</button>
            <p>{amount}</p>
            <button
              className={styles.btn_more}
              onClick={() => handleSum(v.id, v.amount)}
            >
              +
            </button>
          </div>

          <div>
            <p>{v.price * v.amount}Bs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
