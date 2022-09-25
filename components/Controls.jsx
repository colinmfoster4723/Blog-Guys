import classes from "./styles/controls.module.scss";
import Image from "next/image";
import { useState } from "react";
import web3 from "../web3/web3";
import blobguys from "../web3/blobguys";
import Loading from "./Loading";

export default function Controls(props) {
  const { supply } = props;
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  function add() {
    if (count < 2) setCount(count + 1);
    else alert("...you can only mint 2 blob guys at a time...");
  }

  function subtract() {
    if (count > 0) setCount(count - 1);
    else alert("...you cannot mint negative blob guys 🙅‍♂️...");
  }

  async function buy() {
    const accounts = await web3.eth.getAccounts();
    try {
      setLoading(true);
      await blobguys.methods.mint(`${count}`).send({
        from: accounts[0],
        value: web3.utils.toWei(`${0.02 * count}`, "ether"),
      });
      props.reload();
    } catch (err) {
      console.log(err.message);
    }
    setLoading(false);
  }

  return (
    <>
      {(loading && (
        <div className={classes.contain} style={{ height: "30vh" }}>
          <Loading />
        </div>
      )) || (
        <div className={classes.contain}>
          <h2>{`${supply}/20`}</h2>
          <p className={classes.price}>{"price = 0.02 ether"}</p>
          <div className={classes.controls}>
            <div className={classes.control}>
              <button
                className={classes.minus}
                onClick={subtract}
                style={
                  count <= 0
                    ? {
                        opacity: "0.2",
                        cursor: "not-allowed",
                        pointerEvents: "none",
                      }
                    : {}
                }
              >
                <Image src={"/minus.png"} width={100} height={100} />
              </button>
              <p style={{ width: "5vw" }}>{count}</p>
              <button className={classes.plus} onClick={add}>
                <Image src={"/plus.png"} width={100} height={100} />
              </button>
            </div>
            <button onClick={buy}>BUY</button>
          </div>
        </div>
      )}
    </>
  );
}
