// import Image from "next/image";
import Page from "./pages/main/page";
import {MyProvider} from "./components/MyContext";
import { AppProps } from 'next/app';

export default function Home({Component, pageProps}: AppProps) {
  return (
   <MyProvider>
    <Page {...pageProps}/>
   </MyProvider>
  );
}
