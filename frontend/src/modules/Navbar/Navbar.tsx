import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import styles from "./Navbar.module.css";
interface PathItem {
  name: string
}
interface NavbarProps {
  pathList:PathItem[]
}
class Navbar extends React.Component<NavbarProps> {
  render() {
    const {pathList} = this.props
    return (
      <div className={styles.nav}>
        <Breadcrumb pathList={pathList}/>
      </div>
    );
  }
}

export default Navbar;
