import styles from '@/styles/navbar.module.scss';
import Img from '@/assets/img/user.png';
import { BiSearch } from 'react-icons/bi';
import { IoIosNotifications } from 'react-icons/io';
import { route } from 'preact-router';
const Index = () => {
  const redirect = (url: string) => {
    route(url);
  };

  return (
    <nav class={styles.container_header}>
      <div class={styles.company}>
        <h2 onClick={() => redirect('company')}>INFOSHOP</h2>
      </div>

      <div class={styles.container_profile}>
        <div class={styles.content}>
          <BiSearch size={32} />
          <IoIosNotifications size={32} />
          <img onClick={() => redirect('profile')} src={Img} alt="user" />
        </div>
      </div>
    </nav>
  );
};

export default Index;
