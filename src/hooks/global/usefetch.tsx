import { useEffect, useState } from "react";
import Nofound from "@/assets/global/img/noFound1.png";
import Image from "next/image";
import ShowEmpty from "@/components/global/showEmpty";

interface Params<T> {
  services: () => Promise<{ data: T[] }>;
}

const Usefetch = <T,>({ services }: Params<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoadData = async () => {
      const { data } = await services();
      setLoading(false);
      setData(data);
    };

    handleLoadData();
  }, [services]);

  const showMsgEmpty = () => {
    const showMsgEmpty = () => {
      return <ShowEmpty data={data} />;
    };
  };

  return {
    data,
    loading,
    showMsgEmpty,
  };
};

export default Usefetch;
