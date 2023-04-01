import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "preact/hooks";
import { SendEmailType } from "../interfaces/sendEmail";
import { sendEmail } from "../services/auth";
import { validationSchema } from "../validations";
import useForm from "@/hooks/useForm";

const Recover = () => {
  const { handleSend, handleShowBtn, handleShowMessage } =
    useForm<SendEmailType, null>({
      services: sendEmail,
    });

  return (
    <>
      <Formik
        validateOnChange={false}
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSend(values);
        }}
      >
        <Form class={"form"}>
          <Field class="input" name="email" placeholder="Correo" />
          <ErrorMessage name="email" component="p" className="error" />

          {handleShowBtn("Enviar")}
        </Form>
      </Formik>

      {handleShowMessage()}
    </>
  );
};

export default Recover;
