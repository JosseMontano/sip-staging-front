import styles from "../styles/showProduct.module.scss"
import EmpanadaCarne from "../assets/EmpanadaCarne.jpg"
import Info from "./contentModal/info";
import ButtonsChange from "./contentModal/buttonsChange";
import { useState } from "preact/hooks";
import Reserve from "./contentModal/reserve";
import Review from "./contentModal/review";
import { Section } from "../interfaces/Section";


const ContenModal = () => {
  const [section, setSection] = useState<Section>("Info");

  const sections = {
    Info: <Info />,
    Reserve: <Reserve />,
    Review: <Review />
  }


  const price = "$50";
  return (
    <div class={styles.containerFather}>
      <img class={styles.img} src={EmpanadaCarne} alt="Empanada de carne" />

      <div class={styles.containerContent}>
        <h3 class={styles.tittleProduct}>Empanada de carne</h3>
        <p class={styles.contentProduct}>
          Salsa de tomate, muzarella, tomate, albahaca, alcauciles, hierbas,
          limon, jamon cocido y hongos
        </p>
      </div>

      <div class={styles.conteinerPrice}>
        <h2>{price}xUnid</h2>
        <ButtonsChange section={section} setSection={setSection} />
        <p class={styles.borderPriceProduct}></p>
      </div>

      { sections[section] }


     
      
    </div>
  );
}

export default ContenModal