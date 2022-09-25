import Controls from "../components/Controls";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Preview from "../components/Preview";
import blobguys from "../web3/blobguys";

export default function Home(props) {
  return (
    <div className="pgContain">
      <Header />
      <div className="contain">
        <Preview gif={"/blobguys_prev.gif"} />
        <Controls supply={props.supply} />
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
  };
}
