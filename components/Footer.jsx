import classes from "./styles/footer.module.scss";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <p
        style={{ fontSize: "90%" }}
      >{`Contract: 0x78B38956dCA70DE9405a6357b43E4C77f3c1cc09`}</p>
      <p className={classes.warning}>
        make sure you are connected to the Goerli Test Network <br /> and have
        selected the correct wallet
      </p>
    </div>
  );
}
