import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Debe ser un correo electrónico válido")
    .required("El correo electrónico es obligatorio"),
});

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string()
    .email("Debe ser un correo electrónico válido")
    .required("El correo electrónico es obligatorio"),
  password: Yup.string().required("El password es obligatorio"),
});

export const validationSchemaSingUp = Yup.object().shape({
  username: Yup.string()
    .required("Este campo es requerido"),
  email: Yup.string()
    .email("Debe ser un correo electrónico válido")
    .required("El correo electrónico es obligatorio"),
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
