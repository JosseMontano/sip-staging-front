

import { Page } from "@/interfaces/auth/Page";
import styles from "@/styles/auth/template.module.css";

interface Props {
  setPage: any
  children: any; 
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
    <div className={styles.container}>
      <div className={styles.box_container}>
        <div className={styles.title_container}>
          <h2>{ title }</h2>
          <p>{ description }</p>
        </div>
      
          { children }
      
        <div className={styles.other_container}>
          <p className={styles.guest} onClick={handleClick}>{ bottomText }</p>
          {toLogin && <button onClick={() => setPage("login")} className={"button"}>Iniciar sesión</button>}
          {toRegister && <button onClick={() => setPage("register")} className={"button"}>Crea una cuenta</button>}
          {toRecover && <button onClick={() => setPage("recover")} className={"button"}>Recuperar cuenta</button>}
        </div>
      </div>
    </div>
  )
}

export default Template