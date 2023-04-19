import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { SendEmailType } from "@/interfaces/auth/sendEmail";
import { sendEmail } from "@/services/auth/auth";
import { validationSchema } from "@/validations/auth";
import useForm from "@/hooks/global/useForm";

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
        <Form className={"form"}>
          <Field className="input" name="email" placeholder="Correo" />
          <ErrorMessage name="email" component="p" className="error" />

          {handleShowBtn("Enviar")}
        </Form>
      </Formik>

      {handleShowMessage()}
    </>
  );
};

export default Recover;
