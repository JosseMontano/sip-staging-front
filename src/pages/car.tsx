import { useShoppingCar } from "@/store/shoppingCar";
import React, { useEffect, useState } from "react";
import Card from "../components/car";
import styles from "@/styles/car/index.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { sendWhatsapp } from "@/utils/sendWhatsapp";
import { UseUser } from "@/store/user";

const Car = () => {
  const [priceTotal, setPriceTotal] = useState(0);
  const { items, removeItem, updateCar, numberCompany } = useShoppingCar();
  const { user } = UseUser();

  const handleRemoveItem = (id: number) => {
    removeItem(id);
  };

  useEffect(() => {
    const getPriceTotal = () => {
      let priceT = 0;
      for (let i = 0; i < items.length; i++) {
        priceT += items[i].price * items[i].amount;
      }
      setPriceTotal(priceT);
    };

    getPriceTotal();
  }, [items]);

  const handleSend = () => {
    let msg3: string = "";
    for (let item of items) {
      msg3 += item.amount + " " + item.name + ", ";
    }
    sendWhatsapp(user.user_name, msg3, numberCompany); 
  };

  return (
    <div>
      <div className={styles.container_card}>
        {items.map((v) => (
          <Card
            v={v}
            handleRemoveItem={handleRemoveItem}
            key={v.id}
            updateCar={updateCar}
          />
        ))}
      </div>

      <section className={styles.footer}>
        <div className={styles.items}>
          <p>
            Items: <b className={styles.amount}>{items.length}</b>
          </p>
        </div>
        <div className={styles.price}>
          <p>
            Total: <b className={styles.prices}>{priceTotal}BS</b>
          </p>
        </div>
        <div className={styles.end}>
          <button onClick={handleSend}>
            Finaliza pedido
            <AiOutlineArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Car;
