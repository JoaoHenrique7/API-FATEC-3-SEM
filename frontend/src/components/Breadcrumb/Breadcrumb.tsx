import React from "react";
import styles from "./Breadcrumb.module.css";
import arrowRight from "../../assets/arrowRight.svg";
interface PathItem {
  name: string;
}
interface BreadCrumbProps {
  pathList: PathItem[];
}

class Breadcrumb extends React.Component<BreadCrumbProps> {
  render() {
    const { pathList } = this.props;

    return (
      <ul className={styles.breadcrumb}>
        {pathList.map(({ name }, index) => (
          <li className={styles.breadcrumbItem}>
            {index + 1 === pathList.length ? (
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
