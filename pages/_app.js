// pages/_app.js
import "@/node_modules/react-modal-video/css/modal-video.css";
import "../public/assets/css/bootstrap.css";
import "../public/assets/css/color.css";
import "../public/assets/css/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import Head from "next/head";
import { poppins } from "@/lib/font";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GGRC Armenia</title>
        <meta
          name="description"
          content="GGRC Armenia is the Armenian branch of the internationally renowned Georgian-German Reproductive Center (GGRC), a leading fertility clinic that has helped countless families fulfill their dream of becoming parents."
        />
        <meta
          name="keywords"
          content="GGRC, Armenia, Reproductive Center,IVF/ICSI, արտամարմնային բեղմնավորում, անպտղության բուժում"
        />
        <meta name="author" content="GGRC Armenia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
