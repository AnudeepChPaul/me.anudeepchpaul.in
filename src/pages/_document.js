import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700;800&family=Roboto+Mono:wght@100;300;400;500;700&display=swap" rel="stylesheet"/> */}
          <style jsx>{`
                body{
                    margin: 0px;
                }
            `}</style>
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
