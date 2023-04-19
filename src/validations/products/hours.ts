import { HoursType } from "@/interfaces/product/hour";
import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    day: Yup.string().required("Este campo es requerido"),
    start_time: Yup.string().required("Este campo es requerido"),
    end_time: Yup.string().required("Este campo es requerido"),
    company_id: Yup.string().required("Este campo es requerido"),
    state: Yup.string().required("Este campo es requerido"),
  });
  
 export const initialValues: HoursType = {
    day: "",
    start_time: "",
    end_time: "",
    company_id: "1",
    state: "true",
  };