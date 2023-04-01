import styles from "./styles/form.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "preact/hooks";
import { ChangePassType } from "./interfaces/changePass";
import { changePass } from "./services/changePass";
import useForm from "@/hooks/useForm";
interface ParamsRoute {
  code: string;
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Debe ser un correo electrónico válido")
    .required("El correo electrónico es obligatorio"),
  code_recuperation: Yup.string()
    .min(5, "minimo 5 digitos")
    .required("Este campo es requerido"),
  password: Yup.string()
    .min(8, "minimo 8 caracteres")
    .required("Este campo es requerido"),
  password_confirm: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas coinciden")
    .required("Este campo es requerido"),
});

const Index = ({ email, code }: ParamsRoute) => {
  const { handleSend, handleShowBtn, handleShowMessage } =
    useForm<ChangePassType, null>({
      services: changePass,
    });

  return (
    <div class={"container_form" + " " + styles.container}>
      <div class={styles.title_container}>
        <h2>Cambiar contraseña</h2>
        <p>esta ves no te olvides</p>
      </div>
      <Formik
        validateOnChange={false}
        initialValues={{
          email: email,
          code_recuperation: code,
          password: "",
          password_confirm: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(val) => {
          handleSend(val);
        }}
      >
        <Form class="form">
          <Field
            class={"input"}
            type="text"
            placeholder={"Email"}
            name="email"
          />
          <ErrorMessage name="email" component="p" className="error" />

          <Field
            class={"input"}
            type="text"
            placeholder={"Codigo"}
            name="code_recuperation"
          />
          <ErrorMessage
            name="code_recuperation"
            component="p"
            className="error"
          />
          <Field
            class={"input"}
            type="text"
            placeholder={"Nueva contraseña"}
            name="password"
          />
          <ErrorMessage name="password" component="p" className="error" />
          <Field
            class={"input"}
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

export default Index;
