import { Params } from "../interfaces/modal";

import styles from "../styles/modal.module.css";

export const Modal = (params: Params) => {
  const { isShown, hide, modalContent } = params;

  const classModal = isShown
    ? styles.container + " " + styles.modal_open
    : styles.container;

  const handleModalContainerClick = (e: Event) => e.stopPropagation();

  return (
    <div class={classModal} onClick={hide}>
      <div
        class={styles.container_soon}
        onClick={(e) => handleModalContainerClick(e)}
      >
        <p class={styles.close} onClick={hide}>X</p>
        {modalContent}
      </div>
    </div>
  );
};
