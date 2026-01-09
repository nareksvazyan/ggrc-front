// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx.locale || "en" };
  }

  render() {
    const { locale } = this.props;

    return (
      <Html lang={locale}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap&subset=latin,armenian"
            rel="stylesheet"
          />
            <meta
          name="description"
          content="GGRC Armenia is the Armenian branch of the internationally renowned Georgian-German Reproductive Center (GGRC), a leading fertility clinic that has helped countless families fulfill their dream of becoming parents."
        />
        <meta
          name="keywords"
          content="GGRC, Armenia, Reproductive Center,IVF/ICSI, արտամարմնային բեղմնավորում, անպտղության բուժում"
        />
        <meta name="author" content="GGRC Armenia" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;