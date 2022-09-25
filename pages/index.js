import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";
import Controls from "../components/Controls";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Preview from "../components/Preview";
import blobguys from "../web3/blobguys";

export default function Home(props) {
  const router = useRouter();
  useEffect(() => {
    screen.orientation.lock("natural");
  });
  return (
    <div className="pgContain">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Blob Guys</title>
      </Head>
      <Header />
      <div className="contain">
        <Preview gif={"/blobguys_prev.gif"} />
        <Controls
          supply={props.supply}
          reload={() => router.reload(window.location.pathname)}
        />
        <Preview gif={"/blobguys_prev2.gif"} />
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const supply = await blobguys.methods.totalSupply().call();

  return {
    props: {
      supply,
    },
    revalidate: 30,
  };
}
