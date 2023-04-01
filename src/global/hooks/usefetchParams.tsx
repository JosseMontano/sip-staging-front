import { useEffect, useState } from 'preact/hooks';
import Nofound from '../assets/img/noFound.png';
interface Params<T> {
  id: number;
  services: (id: number) => Promise<{ data: T[] }>;
  update: boolean;
}

const UsefetchParams = <T,>({ id, services, update }: Params<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  const handleLoadData = async () => {
    const { data } = await services(id);
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

  if (update) {
    useEffect(() => {
      handleLoadData();
    }, [id]);
  } else {
    useEffect(() => {
      handleLoadData();
    }, []);
  }

  return {
    data,
    loading,
    showMsgEmpty
  };
};

export default UsefetchParams;
