import { useEffect, useState } from 'preact/hooks';
import styles from '../../styles/header.module.css';
import ImgScanMenu from '../../assets/animationScan.gif';
import { route } from 'preact-router';
import Title from './title';
import Description from './description';
import { BtnTest } from './btnTest';

const Index = () => {
  const [title, setTitle] = useState('Gestiona tus clientes');

  const changeText = () => {
    setTimeout(() => {
      if (title == 'Gestiona tus clientes') {
        setTitle('Gestiona tus comidas');
      } else {
        setTitle('Gestiona tus clientes');
      }
    }, 2000);
  };

  const handleClick = () => {
    route('/auth');
  };

  useEffect(() => {
    changeText();
  }, [title]);

  return (
    <>
      <div class={styles.container}>
        <div class={styles.container_text}>
          <Title title={title} />
          <Description />
          <BtnTest handleClick={handleClick} />
        </div>

        <div class={styles.container_media}>

          <img src={ImgScanMenu} />
        </div>
      </div>
      <svg
        class={styles.wave}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,32L48,58.7C96,85,192,139,288,133.3C384,128,480,64,576,58.7C672,53,768,107,864,160C960,213,1056,267,1152,282.7C1248,299,1344,277,1392,266.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default Index;
