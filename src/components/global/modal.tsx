import { Params } from "@/interfaces/global/modal";

import styles from "@/styles/global/modal.module.css";

export const Modal = (params: Params) => {
  const { isShown, hide, modalContent } = params;

  const classNameModal = isShown
    ? styles.container + " " + styles.modal_open
    : styles.container;

  const handleModalContainerClick = (e: any) => e.stopPropagation();

  return (
    <div className={classNameModal} onClick={hide}>
      <div
        className={styles.container_soon}
        onClick={(e) => handleModalContainerClick(e)}
      >
        <p className={styles.close} onClick={hide}>X</p>
        {modalContent}
      </div>
    </div>
  );
};
