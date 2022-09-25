import classes from "./styles/controls.module.scss";
import Image from "next/image";
import { useState } from "react";
import web3 from "../web3/web3";
import blobguys from "../web3/blobguys";

export default function Controls(props) {
  const { supply } = props;
  const [count, setCount] = useState(0);

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
    console.log(accounts[0]);
    try {
      await blobguys.methods.mint(accounts[0], count).send({
        from: accounts[0],
        value: web3.utils.toWei(`${0.02 * count}`, "ether"),
      });
      alert(`Success! You have minted ${count} blob guys`);
      setCount(0);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
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
          <p>{count}</p>
          <button className={classes.plus} onClick={add}>
            <Image src={"/plus.png"} width={100} height={100} />
          </button>
        </div>
        <button onClick={buy}>BUY</button>
      </div>
    </div>
  );
}
