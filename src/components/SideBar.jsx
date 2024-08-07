import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./SideBar.module.css";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/* The outlet component provided by react router is used to display a nested component */}
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Worldwise Inc
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
