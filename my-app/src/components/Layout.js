import clsx from "clsx";
import useStoreSlices from "../store/rootSliceStore";
import styles from "./Layout.module.css";
import SoundButton from "./SoundButton";

export const SplitLayout = (props) => {

  const {
    toggleSound,
    toggleBackgroundSound,
    soundState
  } = useStoreSlices();

  return (
    <div>
      <div className={styles.btntoolbar}>
            <div className={styles.rightside}>
              <SoundButton 
                onClick={() => {
                toggleSound(); 
                toggleBackgroundSound();
              }} 
                soundOn={soundState} />
          </div>
        </div>
      <div className={clsx(styles.Layout, styles.Split)}>
        <section className={clsx(styles.Section, styles.Left)}>
          {props.left}
        </section>
        <section className={clsx(styles.Section, styles.right)}>
          {props.right}
        </section>
      </div>
    </div>
  );
};
