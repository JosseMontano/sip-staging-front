import { Formik, Form, ErrorMessage, Field } from "formik";
import { validationSchemaUpdateUser } from "@/validations/profile";
import { UserType } from "@/interfaces/auth/user";
import { UpdateUserType } from "@/interfaces/profile/updateUser";

interface Params {
  user: UserType;
  handleSend: (val: UpdateUserType) => Promise<{
    data: UserType | null;
  }>;
  loadUser: (user: UserType) => void;
  handleShowBtn: any;
}

const FormProfile = ({ user, handleSend, loadUser, handleShowBtn }: Params) => {
  return (
    <>
      <h2>Editar perfil</h2>
      <Formik
        validateOnChange={false}
        initialValues={{
          user_name: user.user_name,
          country: user.country,
          city: user.city,
          gender: user.gender,
          password: "",
          password_confirm: "",
        }}
        validationSchema={validationSchemaUpdateUser}
        onSubmit={async (val) => {
          const { data } = await handleSend(val);
          if (data) {
            loadUser(data);
          }
        }}
      >
        <Form className={"form"}>
          <Field
            className="input"
            type="text"
            placeholder="Nombre"
            name="user_name"
          />
          <ErrorMessage component="p" className="error" name="user_name" />

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
          {handleShowBtn("Cambiar datos")}
        </Form>
      </Formik>
    </>
  );
};

export default FormProfile;
