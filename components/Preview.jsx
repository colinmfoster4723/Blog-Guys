import Image from "next/image";
import classes from "./styles/preview.module.scss";

export default function Preview(props) {
  const { gif } = props;
  return (
    <div className={classes.img}>
      <Image src={gif} width={1000} height={1000} />
    </div>
  );
}
