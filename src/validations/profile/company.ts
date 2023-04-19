import * as Yup from "yup";

export const initialValuesCompany = {
  name: "",
  description: "",
  category_company_id: "",
  category_name: "",
  ubication: "",
  phone_number: "",
};


export const validationSchemaCompany = Yup.object().shape({
  name: Yup.string().required("Este campo es requerido"),
  description: Yup.string().required("Este campo es requerido"),
  phone_number: Yup.string().required("Este campo es requerido"),
});
