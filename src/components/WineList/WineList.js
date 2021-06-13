import styles from "./WineList.module.scss";
import { useEffect, useState } from "react";
import WineItem from "./WineItem/WineItem";
import db from "../../services/firebase";
import Loader from "../UI/Loader/Loader";

const WineList = () => {
  const [wineList, setWineList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const LoaderSection = (
    <section className={styles.Loader}>
      <Loader />
    </section>
  );
  const ErrorSection = (
    <section className={styles.Error}>
      <h2>{error}</h2>
    </section>
  );

  const getData = async () => {
    try {
      setIsLoading(true);
      const allWines = await db.collection("wine-list").get();
      let wines = [];
      allWines.docs.forEach((doc) => {
        if (doc.exists) {
          const wine = {
            id: doc.data().id,
            title: doc.data().title,
            details: doc.data().details,
            price: doc.data().price,
          };
          wines.push(wine);
        } else {
          throw new Error("Something went wrong! Please try again later");
        }
      });
      setWineList(wines);
      setIsLoading(false);
    } catch (err) {
      setError(err);
    }
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
      {isLoading && !error && LoaderSection}
      {!isLoading && !error && <ul>{wineItem}</ul>}
      {!isLoading && error && ErrorSection}
    </section>
  );
};
export default WineList;
