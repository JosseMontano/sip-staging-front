import React from "react";
import Nofound from "@/assets/global/img/noFound1.png";
import Image from "next/image";

interface Params {
  data: any;
}

const ShowEmpty = ({ data }: Params) => {
  if (data.length === 0) {
    return (
      <div className="container_notfound">
        <Image className="img_notFound" src={Nofound} alt="No hay datos" />
        <p>Por el momento no se tienen datos en este apartado</p>

        <style jsx global>
          {`
            .img_notFound {
              min-width: 200px;
              height: 200px;
            }
          `}
        </style>
      </div>
    );
  }
  return <></>;
};

export default ShowEmpty;
