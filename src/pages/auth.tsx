import { UseUser } from "@/store/user";
import { saveCookie } from "@/utils/cookie";

import { useState } from "react";
import Login from "@/components/auth/login";
import Recover from "@/components/auth/recover";
import Register from "@/components/auth/register";
import Template from "@/components/auth/template";
import { Page } from "@/interfaces/auth/Page";
import { UserType } from "@/interfaces/auth/user";
import { getUser, signInAsGuest } from "@/services/auth/auth";
import { useRouter } from "next/router";
const Auth = () => {
  const router = useRouter();
  const [page, setPage] = useState<Page>("login");
  const { loadUser } = UseUser();

  const handleClick = async () => {
    if (page != "register") {
      const { data } = await signInAsGuest<UserType, string>();
      if (data) {
        saveCookie("token", data);
        const { data: dataUser } = await getUser<UserType>();
        loadUser(dataUser);
        router.push("/company");
      }
      return;
    }
    setPage("login");
  };

  return (
    <Template
      setPage={setPage}
      title={
        page === "register"
          ? "Crea una cuenta"
          : page === "login"
          ? "Inicia sesión"
          : page === "recover"
          ? "Recupera tu cuenta"
          : ""
      }
      description={
        page === "register"
          ? "Regístrate y únete a SIVI"
          : page === "login"
          ? "Disfruta las funcionalidades"
          : page === "recover"
          ? "Te enviaremos un correo electrónico"
          : ""
      }
      bottomText={
        page === "register"
          ? "¿Ya tienes una cuenta?"
          : page === "login"
          ? "Ingresa como invitado"
          : page === "recover"
          ? "Ingresa como invitado"
          : ""
      }
      handleClick={handleClick}
      toLogin={page === "register" || page === "recover"}
      toRegister={page === "login" || page === "recover"}
      toRecover={page === "login"}
    >
      {page === "login" && <Login />}
      {page === "register" && <Register />}
      {page === "recover" && <Recover />}
    </Template>
  );
};

export default Auth;
