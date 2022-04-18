import Document, { Html, Head, Main, NextScript } from "next/document";

const meta = {
  name: `I-Weather`,
  description: `It's an app that connects to a public weather and geocoding REST APIs. Display the 7 day forecast for a specified address on an HTML page.`,
};
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta content={meta.description} name="description" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={meta.name} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.name} />
          <meta name="twitter:title" content={meta.name} />
          <meta name="twitter:description" content={meta.description} />
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
