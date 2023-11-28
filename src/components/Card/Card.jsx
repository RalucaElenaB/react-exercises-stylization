import styles from './Card.module.css';
// import css from "./Card.module.css";
// import classes from "./Card.module.css";

function Card() {
  console.dir(styles);

  return <div className={styles.green}>Text cu verde</div>;
  //   return <div className="styles.yellow">Text cu galben</div>;
  //   return <div style={{ color: "red" }}>Text cu rosu</div>;
}

export default Card;
