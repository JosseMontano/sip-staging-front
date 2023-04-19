import styles from "@/styles/profile/photo.module.css";
import UserMan from "@/assets/profile/userMan.png";
import UserWoman from "@/assets/profile/userWoman.png";
import { UseUser } from "@/store/user";
import { deleteLocalStorage } from "@/utils/localStorage";
import Image from "next/image";
import UseAuth from "@/hooks/global/useAuth";
import { updateUser } from "@/services/profile/updateUser";
import { UpdateUserType } from "@/interfaces/profile/updateUser";
import useFormParams from "@/hooks/global/useFormParams";
import { UserType } from "@/interfaces/global/user";
import { useModal } from "@/hooks/global/useModal";
import { Modal } from "@/components/global/modal";
import FormCompany from "../components/profile/postCompany";
import FormProfile from "@/components/profile/formProfile";
import { useState } from "react";

import { GetUserCompaniesType } from "@/interfaces/profile/getUser";
import UsefetchParamsObject from "@/hooks/global/usefetchParamsObject";
import Companies from "@/components/profile/companies";
import { getUser } from "@/services/profile/getUser";

const Index = () => {
  UseAuth();
  const { user, loadUser } = UseUser();

  const [showMap, setShowMap] = useState(false);
  let msgShowMap = !showMap ? "Publicar Compañia" : "Mostrar compañias";

  const { data: userCompanies } = UsefetchParamsObject<GetUserCompaniesType>({
    id: user.id,
    services: getUser,
    update: false,
  });

  const handleShowMap = () => {
    setShowMap(!showMap);
  };

  const { handleSend, handleShowBtn, handleShowMessage } = useFormParams<
    UpdateUserType,
    UserType
  >({
    services: updateUser,
    id: user.id,
  });

  const photo = user.gender == "Masculino" ? UserMan : UserWoman;

  const logOut = async () => {
    await deleteLocalStorage("user-infoshop");
    location.href = "/auth";
  };

  const { isShown, toggle } = useModal({ show: false });

  let styleBtn = styles.btn_global + " " + styles.button;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_info}>
          <Image
            height={200}
            width={200}
            className={styles.container_info_img}
            src={photo}
            alt=""
          />
          <p className={styles.container_text}>{user.email}</p>
        </div>

        <div className={styles.container_btn}>
          <button className={styleBtn} onClick={toggle}>
            Editar perfil
          </button>

          <button className={styleBtn} onClick={handleShowMap}>
            {msgShowMap}
          </button>

          <button onClick={logOut} className={styleBtn}>
            Log out
          </button>
        </div>

        <Modal
          hide={toggle}
          isShown={isShown}
          modalContent={
            <FormProfile
              handleSend={handleSend}
              handleShowBtn={handleShowBtn}
              loadUser={loadUser}
              user={user}
            />
          }
        />
      </div>

      {showMap && <FormCompany />}

      {!showMap && <Companies companies={userCompanies} />}

      {handleShowMessage()}
    </>
  );
};

export default Index;
