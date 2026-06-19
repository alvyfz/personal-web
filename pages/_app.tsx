import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Inter } from "@next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 650,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
