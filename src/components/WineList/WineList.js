import styles from "./WineList.module.scss";
import { useEffect, useState } from "react";
import WineItem from "./WineItem/WineItem";
const WineList = () => {
  const [wineList, setWineList] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/stefanskoricdev/wine-shop-app/wines"
    );
    const data = await response.json();
    setWineList(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const wineItem = wineList.map((wine, i) => {
    return (
      <WineItem
        key={Math.random() + i}
        wineId={wine.id}
        wineTitle={wine.title}
        wineDetails={wine.details}
        price={`${wine.price} $`}
      />
    );
  });
  return (
    <section className={styles.WineList}>
      <ul>{wineItem}</ul>
    </section>
  );
};
export default WineList;
