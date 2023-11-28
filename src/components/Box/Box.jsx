import styles from './Box.module.css';

function Box({ variant }) {
  console.dir(styles);

  return <div className={styles[variant]}>Text cu rosu</div>;
}

export default Box;
