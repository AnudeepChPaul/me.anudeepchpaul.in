import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style>{`
                body{
                    margin: 0px;
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
          <meta name="theme-color" color='#1c2231'/>
          <meta name="robots" content="all" />
          <link rel="manifest" href="/manifest.webmanifest"/>
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
