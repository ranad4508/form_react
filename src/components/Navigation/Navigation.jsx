import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="/images/brand_logo.png" alt="nike" />
      </div>
      <ul>
        <li> Home </li>
        <li> About </li>
        <li> Contact </li>
      </ul>
    </nav>
  );
};

export default Navigation;
