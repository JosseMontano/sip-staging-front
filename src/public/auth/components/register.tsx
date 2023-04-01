import { Formik, Form, ErrorMessage, Field } from "formik";
import useForm from "../../../global/hooks/useForm";
import { SingUpType } from "../interfaces/singUp";
import { singUp } from "../services/auth";
import { validationSchemaSingUp } from "../validations";
import Toast from "../../../global/components/toast";

const Register = () => {
  const { handleSend,handleShowBtn, handleShowMessage} = useForm<SingUpType, null>({
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
          country: "",
          city: "",
          gender: "",
        }}
        validationSchema={validationSchemaSingUp}
        onSubmit={(val) => {
          handleSend(val);
        }}
      >
        <Form class={"form"}>
          <Field
            class="input"
            type="text"
            placeholder="Nombre"
            name="username"
          />
          <ErrorMessage component="p" class="error" name="username" />
          <Field class="input" type="text" placeholder="Correo" name="email" />
          <ErrorMessage component="p" class="error" name="email" />
          <Field class="input" type="text" placeholder="Pais" name="country" />
          <ErrorMessage component="p" class="error" name="country" />
          <Field class="input" type="text" placeholder="Ciudad" name="city" />
          <ErrorMessage component="p" class="error" name="city" />
          <Field class="input" type="text" placeholder="Genero" name="gender" />
          <ErrorMessage component="p" class="error" name="gender" />
          <Field
            class="input"
            type="text"
            placeholder="Contraseña"
            name="password"
          />
          <ErrorMessage component="p" class="error" name="password" />
          <Field
            class="input"
            type="text"
            placeholder="Contraseña"
            name="password_confirm"
          />
          <ErrorMessage component="p" class="error" name="password_confirm" />
          {handleShowBtn("Registrarse")}
        </Form>
      </Formik>
      {handleShowMessage()}
    </>
  );
};

export default Register;
