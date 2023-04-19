import React, { useState } from "react";
import { getCompany } from "@/services/company/company";
import Usefetch from "@/hooks/global/usefetch";
import { CompanyTypes, CreateCompanyType } from "@/interfaces/profile/company";
import { createNewCompany } from "@/services/profile/createCompany";
import useForm from "@/hooks/global/useForm";
import { UseUser } from "@/store/user";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
/* import "leaflet-defaulticon-compatibility"; */
import styles from "@/styles/profile/postCompany.module.css";
import { MarkerPositionType } from "@/interfaces/profile/markerPosition";
import FormComponent from "./form";

const MapContainer = dynamic(
  () => import("react-leaflet").then((module) => module.MapContainer),
  {
    ssr: false,
  }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((module) => module.TileLayer),
  {
    ssr: false,
  }
);

const Marker = dynamic(
  () => import("react-leaflet").then((module) => module.Marker),
  {
    ssr: false,
  }
);

const Popup = dynamic(
  () => import("react-leaflet").then((module) => module.Popup),
  {
    ssr: false,
  }
);

const LocationMarker = dynamic(() => import("./locationMarker"), {
  ssr: false,
});

const styleMap = {
  height: "300px",
  width: "300px",
  marginBottom: "20px",
};

const Index = () => {
  const { user } = UseUser();

  const { data: categories } = Usefetch<CompanyTypes>({
    services: getCompany,
  });

  const [loadingPost, setLoadingPost] = useState(false);

  const handleLoadingPost = (state: boolean) => {
    setLoadingPost(state);
  };

  const { handleSend, handleShowMessage } = useForm<CreateCompanyType, null>({
    services: createNewCompany,
  });

  //*from here the logic corresponds to the map

  const [markerPosition, setMarkerPosition] =
    useState<MarkerPositionType | null>(null);

  const handleGetLatLng = (e: any) => {
    const { lat, lng } = e.latlng;
    setMarkerPosition({ lat, lng });
  };

  function showMapJSX() {
    if (typeof window !== "undefined") {
      return (
        <MapContainer
          style={styleMap}
          center={[-17.372443032788112, -66.16351643329834]}
          zoom={13}
        >
          {markerPosition != null && (
            <Marker position={[markerPosition.lat, markerPosition.lng]}>
              <Popup>
                Aquí se encuentra <br /> tu compañia
              </Popup>
            </Marker>
          )}
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <LocationMarker handleClick={handleGetLatLng} />
        </MapContainer>
      );
    }
  }

  return (
    <div className={styles.container}>
      <h2 className="title_form">Publica tu compañia</h2>

      <div>{showMapJSX()}</div>

      <FormComponent
        categories={categories}
        handleLoadingPost={handleLoadingPost}
        handleSend={handleSend}
        loadingPost={loadingPost}
        markerPosition={markerPosition}
        user={user}
      />

      {handleShowMessage()}
    </div>
  );
};

export default Index;
