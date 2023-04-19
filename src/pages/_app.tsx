import "@/styles/globals.css";
import "@/styles/global/form.css";
import "@/styles/global/noFound.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/global/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
