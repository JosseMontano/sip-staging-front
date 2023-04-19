import { useState } from "react";
import Toast from "@/components/global/toast";
interface Params<T, R> {
  services: (val: T) => Promise<{ msg: string; data?: R | null }>;
}

function useForm<T, R>({ services }: Params<T, R>) {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSend = async (val: T): Promise<{ data: R | null }> => {
    setLoading(true);
    const { msg, data } = await services(val);
    /*  setData(data); */
    setMsg(msg);
    setLoading(false);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
    if (data) {
      return { data };
    }
    return { data: null };
  };

  const handleShowBtn = (msg: string) => {
    return (
      <input className="input" type="submit" value={loading ? "Cargando" : msg} />
    );
  };

  const handleShowMessage = () => {
    if (showMessage) {
      return <Toast msg={msg} />;
    }
  };

  return {
    handleSend,
    handleShowMessage,
    handleShowBtn,
  };
}

export default useForm;
