import { Formik, Form, ErrorMessage, Field } from "formik";
import useForm from "@/hooks/global/useForm";
import { SingUpType } from "@/interfaces/auth/singUp";
import { singUp } from "@/services/auth/auth";
import { validationSchemaSingUp } from "@/validations/auth";


const Register = () => {
  const { handleSend, handleShowBtn, handleShowMessage } = useForm<
    SingUpType,
    null
  >({
    services: singUp,
  });

  return (
    <>
      <Formik
        validateOnChange={false}
        initialValues={{
          username: "",
          email: "",
          password: "",
          password_confirm: "",
          country: "Bolivia",
          city: "",
          gender: "Masculino",
        }}
        validationSchema={validationSchemaSingUp}
        onSubmit={(val) => {
          handleSend(val);
        }}
      >
        <Form className={"form"}>
          <Field
            className="input"
            type="text"
            placeholder="Nombre"
            name="username"
          />
          <ErrorMessage component="p" className="error" name="username" />
          <Field
            className="input"
            type="text"
            placeholder="Correo"
            name="email"
          />
          <ErrorMessage component="p" className="error" name="email" />

          <Field className="select" name="country" as="select">
            <option value={"Bolivia"}>{"Bolivia"}</option>
            <option value={"Peru"}>{"Peru"}</option>
            <option value={"Chile"}>{"Chile"}</option>
            <option value={"Argentina"}>{"Argentina"}</option>
          </Field>

          <ErrorMessage component="p" className="error" name="country" />
          <Field
            className="input"
            type="text"
            placeholder="Ciudad"
            name="city"
          />
          <ErrorMessage component="p" className="error" name="city" />

          <Field className="select" name="gender" as="select">
            <option value={"Masculino"}>{"Masculino"}</option>
            <option value={"Femenino"}>{"Femenino"}</option>
          </Field>

          <ErrorMessage component="p" className="error" name="gender" />
          <Field
            className="input"
            type="text"
            placeholder="Contraseña"
            name="password"
          />
          <ErrorMessage component="p" className="error" name="password" />
          <Field
            className="input"
            type="text"
            placeholder="Contraseña"
            name="password_confirm"
          />
          <ErrorMessage
            component="p"
            className="error"
            name="password_confirm"
          />
          {handleShowBtn("Registrarse")}
        </Form>
      </Formik>
      {handleShowMessage()}
    </>
  );
};

export default Register;
