
import { Inter } from "next/font/google";
import Header from "../components/index/header";
import UseApp from "../components/index/useApp";
import Features from "../components/index/features";
import Main from "../components/index/main";
import Thanks from "../components/index/thanks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Main />
      <UseApp />
      <Features />
      <Thanks />
    </>
  );
}
