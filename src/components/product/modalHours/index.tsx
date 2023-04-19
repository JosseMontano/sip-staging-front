import Form from "./form";
import React from "react";
import ListHours from "./listHours";
import UsefetchParams from "@/hooks/global/usefetchParams";
import { getHours } from "@/services/product/hour";
import { GetHoursType } from "@/interfaces/product/hour";

interface Params {
  idCompany: number;
}

const Index = ({ idCompany }: Params) => {
  const { data, loading, loadingJSX, showMsgEmpty, handleLoadData } = UsefetchParams<GetHoursType>({
    id: idCompany,
    services: getHours,
    update: false,
  });

  return (
    <div>
      <Form idCompany={idCompany} />
      <ListHours data={data} handleLoadData={handleLoadData} />
    </div>
  );
};

export default Index;
