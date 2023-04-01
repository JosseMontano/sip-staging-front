import styles from '../../styles/useApp.module.scss';


const Index = () => {
  return (
    <div class={styles.container_father}>
      <div class={styles.contain_description}>
        <h2>Incopora tecnologia</h2>
        <p>
          Empezá ya a probar una versión completa de{' '}
          <b>SIVI de forma gratuita por 3 meses</b> y simplificá las tareas
          administrativas. Ahorrá tiempo, papel y evitá errores.
        </p>
        <ul>
          <div>
            <li>
              <b>{'> '}</b>Versión completa de SIVI con aplicación móvil
            </li>
            <li>
              <b>{'> '}</b>Sin limitaciones
            </li>
            <li>
              <b>{'> '}</b>Adaptado al Marco Académico de tu provincia
            </li>
            <li>
              <b>{'> '}</b>Soporte por email o WhatsApp
            </li>
          </div>
        </ul>
      </div>

      <form class={styles.contain_form} action="">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="Telefono" />
        <textarea placeholder="escribe tu consulta" />

        <button type="submit">Probar Ahora</button>
      </form>
    </div>
  );
};

export default Index;
