interface Params {
  handleClick: () => void;
}

export const BtnTest = ({ handleClick}: Params) => {
  return <button data-testid="btn" onClick={handleClick}>Probar gratis</button>;
};
