import clsx from "clsx";
import styles from "./Layout.module.css";

export const SplitLayout = (props) => {
  return (
    <div className={clsx(styles.Layout, styles.Split)}>
      <section className={clsx(styles.Section, styles.Left)}>
        {props.left}
      </section>
      <section className={clsx(styles.Section, styles.right)}>
        {props.right}
      </section>
    </div>
  );
};
