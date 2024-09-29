import React from "react";
import styles from "./styles.module.scss";
import playerImage from "../../assets/player.png";
import sidebarLine from "../../assets/Shape 3.png";
import DateDisplay from "@components/DisplayDate";
import MainSideBar from "@layout/MainSideBar";

const MainPage = () => {
  return (
    <div className={styles.backgroundContainer}>

      <DateDisplay />
      <MainSideBar />
      <div className={styles.arrowContainer}>
        <div className={styles.arrow}></div>
        <div className={styles.arrow}></div>
        <div className={styles.arrow}></div>
      </div>
      <div className={styles.content}>
      <div className={styles.titleSection}>
     
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>DON'T MISS THE GAME</h1>
      </div>
      <p className={styles.loremText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut veniam.
      </p>
    </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>SIGN IN</button>
          <button className={styles.button}>READ MORE</button>
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <div className={styles.arrow}></div>
        <div className={styles.arrow}></div>
        <div className={styles.arrow}></div>
      </div>
      <img src={playerImage} alt="Player" className={styles.playerImage} />

      <div className={styles.soccerContainer}>
        <div  className={styles.soccerTitle}>SOCCER</div>
        <div className={styles.soccerText}>PREDICTION TOURNAMENT</div>
      </div>
    </div>
  );
};

export default MainPage;
