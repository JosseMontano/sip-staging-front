import styles from './styles/photo.module.css';
import UserMan from './assets/userMan.png';
import UserWoman from './assets/userWoman.png';
import { useUser } from '@/store/user';
import { deleteLocalStorage } from '@/utils/localStorage';
import { route } from 'preact-router';

const index = () => {
  const { user } = useUser();

  const photo = user.gender == 'masculino' ? UserMan : UserWoman;

  const logOut = async () => {
    await deleteLocalStorage('user-infoshop');
    location.href = '/auth';
  };

  const styleBtn = styles.btn_global + ' ';
  return (
    <div class={styles.container}>
      <h2>My profile</h2>
      <p>Update the information about your profile</p>
      <div class={styles.container_info}>
        <img class={styles.container_info_img} src={photo} alt="" />
        <p class={styles.container_text}>{user.email}</p>
        <p class={styles.container_text}>DNI 232322332</p>
      </div>
      <form class={styles.form}>
        <input class={styles.form_input} type="text" />
        <input class={styles.form_input} type="text" />
        <button class={styleBtn + styles.form_button} type="submit">
          Update
        </button>
      </form>

      <div class={styles.footer}>
        <button
          onClick={logOut}
          class={styleBtn + styles.footer_button}
          type="submit"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default index;
