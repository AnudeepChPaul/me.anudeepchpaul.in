import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style>{`
                body{
                    margin: 0px;
                    width: fit-content;
                }
            `}</style>
          <meta
            name="description"
            content="A portal to check on Anudeep Chandra Paul's resume and skills."
          />
          <meta
            property="og:description"
            content="A portal to check on Anudeep Chandra Paul's resume and skills."
          />
          <meta
            name="google-site-verification"
            content="6Sel5PCo0RnZeZQzzoRUOiQIjWreM5FXUSN-o-RWyao"
          />
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
