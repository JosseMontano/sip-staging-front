interface Params {
  title: string;
}

const Title = ({ title }: Params) => {
  return <h1 data-testid="title">{title}</h1>;
};

export default Title;
