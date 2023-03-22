import React from "react";
import styles from "./Breadcrumb.module.css";
import arrowRight from "../../assets/arrowRight.svg";

class Breadcrumb extends React.Component {
  render() {
    const breadcrumbList = [{ name: "Home" }, { name: "Dashboard" }];
    return (
      <ul className={styles.breadcrumb}>
        {breadcrumbList.map(({ name }, index) => (
          <li className={styles.breadcrumbItem}>
            {index + 1 === breadcrumbList.length ? (
              <div className={styles.noBold}>{name}</div>
            ) : (
              <>
                <div>{name}</div>
                <img
                  className={styles.breadcrumbArrow}
                  src={arrowRight}
                  alt="arrow"
                />
              </>
            )}
          </li>
        ))}
      </ul>
    );
  }
}

export default Breadcrumb;
