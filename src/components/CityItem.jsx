/* eslint-disable react/prop-types */
import styles from "./CityItem.module.css";
function CityItem({ city }) {
  return <li className={styles.cityItem}>{city.emoji}</li>;
}

export default CityItem;
