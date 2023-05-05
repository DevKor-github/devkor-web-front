import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
//import FooterPresentation  from "@/components/main_page/FooterPresentation";
import '../styles/Footer.css';


export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
