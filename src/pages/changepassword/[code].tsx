import React, { useState } from "react";
import styles from "@/styles/changePass/form.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ChangePassType } from "@/interfaces/changePass/changePass";
import { changePass } from "@/services/changePass/changePass";
import useForm from "@/hooks/global/useForm";
import { useRouter } from "next/router";

interface ParamsRoute {}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Debe ser un correo electrónico válido")
    .required("El correo electrónico es obligatorio"),
  password: Yup.string()
    .min(6, "minimo 6 caracteres")
    .required("Este campo es requerido"),
  password_confirm: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas coinciden")
    .required("Este campo es requerido"),
});

const ChangePass = ({}: ParamsRoute) => {
  const router = useRouter();
  const { code } = router.query;

  const { handleSend, handleShowBtn, handleShowMessage } = useForm<
    ChangePassType,
    null
  >({
    services: changePass,
  });

  if(!code){
    return <div>Loading...</div>;
  }


  return (
    <div className={"container_form" + " " + styles.container}>
      <div className={styles.title_container}>
        <h2>Cambiar contraseña</h2>
        <p>esta ves no te olvides</p>
      </div>
      <Formik
        validateOnChange={false}
        initialValues={{
          email: "",
          code_recuperation: code.toString() ,
          password: "",
          password_confirm: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(val) => {
          handleSend(val);
        }}
      >
        <Form className="form">
          <Field
            className={"input"}
            type="text"
            placeholder={"Email"}
            name="email"
          />
          <ErrorMessage name="email" component="p" className="error" />

          <Field
            className={"input"}
            type="text"
            placeholder={"Nueva contraseña"}
            name="password"
          />
          <ErrorMessage name="password" component="p" className="error" />
          <Field
            className={"input"}
            type="text"
            placeholder={"Repetir contraseña"}
            name="password_confirm"
          />
          <ErrorMessage
            name="password_confirm"
            component="p"
            className="error"
          />

          {handleShowBtn("Cambiar")}
        </Form>
      </Formik>

      {handleShowMessage()}
    </div>
  );
};

export default ChangePass;
