import { useEffect, useState } from "preact/hooks";
import Nofound from "../assets/img/noFound.png";
interface Params<T> {
  services: () => Promise<{ data: T[] }>;
}

const Usefetch = <T,>({ services }: Params<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  const handleLoadData = async () => {
    const { data } = await services();
    setLoading(false);
    setData(data);
  };

  const showMsgEmpty = () => {
    if (data.length === 0) {
      return (
        <div class="container_notfound">
          <img src={Nofound} alt="No hay datos" />
          <p>Por el momento no se tienen datos en este apartado</p>
        </div>
      );
    }
  };

  useEffect(() => {
    handleLoadData();
  }, []);

  return {
    data,
    loading,
    showMsgEmpty,
  };
};

export default Usefetch;
