import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Blob Guys V2 NFT Collection: guys derived from blobs"
        />
        <meta name="keywords" content="NFT, Goerli, Opensea"></meta>
        <meta name="author" content="Colin M Foster"></meta>
        <link rel="icon" href="/icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
