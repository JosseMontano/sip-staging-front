import { ComponentChildren } from "preact";
import { StateUpdater } from "preact/hooks";
import { Page } from "../interfaces/Page";
import styles from "../styles/template.module.css";

interface Props {
  setPage: StateUpdater<Page>
  children: ComponentChildren; 
  title: string;
  description: string;
  bottomText: string;
  toRegister: boolean;
  toLogin: boolean;
  toRecover: boolean;
  handleClick:()=>void;
}

const Template = ({ children, title, description, bottomText, toRegister, toLogin, toRecover, setPage, handleClick }: Props) => {
  return (
    <div class={styles.container}>
      <div class={styles.box_container}>
        <div class={styles.title_container}>
          <h2>{ title }</h2>
          <p>{ description }</p>
        </div>
      
          { children }
      
        <div class={styles.other_container}>
          <p class={styles.guest} onClick={handleClick}>{ bottomText }</p>
          {toLogin && <button onClick={() => setPage("login")} class={"button"}>Iniciar sesión</button>}
          {toRegister && <button onClick={() => setPage("register")} class={"button"}>Crea una cuenta</button>}
          {toRecover && <button onClick={() => setPage("recover")} class={"button"}>Recuperar cuenta</button>}
        </div>
      </div>
    </div>
  )
}

export default Template