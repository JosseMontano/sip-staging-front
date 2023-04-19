
export const sendWhatsapp = (user: string, msg3: string, number: string) => {
  let msg = `Hola, soy ${user} necesito los siguientes productos : ${msg3}`;
  window.open(
    `https://api.whatsapp.com/send/?phone=${number}&text=${msg}`,
    "_blank"
  );
};
