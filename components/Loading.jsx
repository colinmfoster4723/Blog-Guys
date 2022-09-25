import classes from "./styles/loading.module.scss";

export default function Loading() {
  return (
    <div className={classes.example}>
      <div className={classes.block}>
        <div className={classes.item}></div>
        <div className={classes.item}></div>
        <div className={classes.item}></div>
        <div className={classes.item}></div>
        <div className={classes.item}></div>
        <div className={classes.item}></div>
        <div className={classes.item}></div>
        <div className={classes.item}></div>
      </div>
    </div>
  );
}
