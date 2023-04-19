import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { uploadFile } from "@/libs/firebase";
import { getUuid } from "@/utils/uuid";
import {
  initialValuesCompany,
  validationSchemaCompany,
} from "@/validations/profile/company";
import { CompanyTypes, CreateCompanyType } from "@/interfaces/profile/company";
import { UserType } from "@/interfaces/auth/user";
import { MarkerPositionType } from "@/interfaces/profile/markerPosition";

interface Params {
  user: UserType;
  handleSend: (val: CreateCompanyType) => Promise<{
    data: null;
  }>;
  markerPosition: MarkerPositionType | null;
  categories: CompanyTypes[];
  handleLoadingPost: (state: boolean) => void;
  loadingPost: Boolean;
}

const FormComponent = ({
  user,
  handleSend,
  markerPosition,
  categories,
  handleLoadingPost,
  loadingPost,
}: Params) => {
  return (
    <Formik
      validateOnChange={false}
      initialValues={initialValuesCompany}
      validationSchema={validationSchemaCompany}
      onSubmit={async (val) => {
        handleLoadingPost(true);

        const uuid = getUuid();

        let photo = "";
        //@ts-ignore
        if (val.myfile) {
          //@ts-ignore
          photo = await uploadFile(val.myfile, uuid);
        }

        if (val.category_name != "") {
          val.category_company_id = "";
        }
        //@ts-ignore
        delete val.myfile;
        const createCompany: CreateCompanyType = {
          ...val,
          photo,
          user_id: user.id.toString(),
          ubication: markerPosition?.lat + " " + markerPosition?.lng,
        };

        await handleSend(createCompany);

        handleLoadingPost(false);
      }}
    >
      {({ setFieldValue }) => (
        <Form className={"form"}>
          <label>Nombre</label>
          <Field
            className="input"
            type="text"
            placeholder="Nombre"
            name="name"
          />
          <ErrorMessage component="p" className="error" name="name" />
          <label>Descripcion</label>
          <Field
            className="text_area"
            type="text"
            placeholder="Descripcion"
            name="description"
            as="textarea"
          />
          <ErrorMessage component="p" className="error" name="description" />
          <label>Numero de celular</label>
          <Field
            className="input"
            type="text"
            placeholder="59176396206"
            name="phone_number"
          />
          <ErrorMessage component="p" className="error" name="phone_number" />

          <label>
            Foto <span>(No es obligatorio)</span>
          </label>
          <div className="container_file">
            <Field
              className="input_file"
              type="file"
              name="photo"
              onChange={(e: any) => {
                setFieldValue("myfile", e.currentTarget.files[0]);
              }}
            />
          </div>

          <label>
            Categorias existentes{" "}
            <span>(Si no hay agregala en el campo de abajo)</span>
          </label>
          <Field className="select" name="category_company_id" as="select">
            <option value={0}>==== Escoge una ====</option>
            {categories.map((v) => (
              <option key={v.id} value={v.id}>
                {v.name}
              </option>
            ))}
          </Field>

          <ErrorMessage
            component="p"
            className="error"
            name="category_company_id"
          />

          <label>Categoria Nueva</label>

          <Field
            className="input"
            type="text"
            placeholder="Categoria"
            name="category_name"
          />
          <ErrorMessage component="p" className="error" name="category_name" />

          <input
            className="input"
            type="submit"
            value={loadingPost ? "Cargando" : "Publicar"}
          />
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
