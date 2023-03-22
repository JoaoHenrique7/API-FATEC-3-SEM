import React from "react";
import styles from "./Content.module.css";

class Content extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h1>Dashboard</h1>
          <h3 className={styles.contentSubtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        </div>
        <div className={styles.container}></div>
      </div>
    );
  }
}

export default Content;
