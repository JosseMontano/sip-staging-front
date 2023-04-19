import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useForm from "@/hooks/global/useForm";
import { saveHourCompany } from "@/services/product/hour";
import { HoursType } from "@/interfaces/product/hour";
import { initialValues, validationSchema } from "@/validations/products/hours";

interface Params {
  idCompany: number;
}

const FormComponent = ({ idCompany }: Params) => {
  const { handleSend, handleShowBtn, handleShowMessage } = useForm<
    HoursType,
    null
  >({
    services: saveHourCompany,
  });

  const onSubmit = async (values: HoursType) => {
    values.company_id = idCompany.toString();
    await handleSend(values);
  };

  return (
    <div>
      <h2>Agregar horario</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={"form"}>
          <Field className="select" name="day" as="select">
            <option value={"Lunes"}>{"Lunes"}</option>
            <option value={"Martes"}>{"Martes"}</option>
            <option value={"Miercoles"}>{"Miercoles"}</option>
            <option value={"Jueves"}>{"Jueves"}</option>
            <option value={"Viernes"}>{"Viernes"}</option>
            <option value={"Sabado"}>{"Sabado"}</option>
            <option value={"Domingo"}>{"Domingo"}</option>
          </Field>

          <ErrorMessage component="p" className="error" name="day" />

          <Field
            placeholder="Hora de inicio"
            className="input"
            name="start_time"
          />
          <ErrorMessage component="p" className="error" name="start_time" />

          <Field
            placeholder="Hora de cerrada"
            className="input"
            name="end_time"
          />
          <ErrorMessage component="p" className="error" name="end_time" />

          {handleShowBtn("Publicar")}
        </Form>
      </Formik>
      {handleShowMessage()}
    </div>
  );
};

export default FormComponent;
