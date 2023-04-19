import * as Yup from "yup";

export const validationSchemaUpdateUser = Yup.object().shape({
    user_name: Yup.string()
      .required("Este campo es requerido"),
    country: Yup.string()
      .required("Este campo es requerido"),
    city: Yup.string()
      .required("Este campo es requerido"),
    gender: Yup.string()
      .required("Este campo es requerido"),
    password: Yup.string()
      .min(8, "minimo 8 caracteres")
      .required("Este campo es requerido"),
    password_confirm: Yup.string()
      .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
      .required("Este campo es requerido"),
  });
  