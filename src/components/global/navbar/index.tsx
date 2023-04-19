import styles from "@/styles/global/navbar.module.css";
import Img from "@/assets/global/img/user.png";
import { BiSearch } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/router";
import Template from "./template";

const Index = () => {
  const router = useRouter();

  const redirect = (url: string) => {
    router.push(url);
  };

  return (
    <>
      <Template />
      <Template relativeStyle={styles.position_relative} />
    </>
  );
};

export default Index;
