import ShowEmpty from "@/components/global/showEmpty";
import { useEffect, useState } from "react";

interface Params<T> {
  id: number;
  services: (id: number) => Promise<{ data: T[] }>;
  update: boolean;
}

const UsefetchParams = <T,>({ id, services, update }: Params<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  const handleLoadData = async () => {
    setLoading(true);
    const { data } = await services(id);
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    handleLoadData();
  }, [id, services]);

  const showMsgEmpty = () => {
    if (data.length === 0) {
      return <ShowEmpty data={data} />;
    }
  };

  const loadingJSX = () => {
    if (loading) {
      return <p>Loading</p>;
    }
  };

  return {
    data,
    loading,
    showMsgEmpty,
    loadingJSX,
    handleLoadData,
  };
};

export default UsefetchParams;
