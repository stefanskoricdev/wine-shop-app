import styles from "./WineList.module.scss";

import WineItem from "./WineItem/WineItem";
const WineList = (props) => {
  const wineList = {
    wines: [
      {
        title: "Marques Calado Macabeo",
        details: `Fresh, floral aromas reminiscent 
        of aromatic herbs such as anise and fennel,
        the smooth and velvety palete is fruit driven 
        with citrus and tropical flavours`,
        price: 12.95,
      },
      {
        title: "Alfredini Pinot Grigio",
        details: `Expect crisp notes of grapefruit, 
        lemon and lime that are chased by a 
        refreshing finish.`,
        price: 13.95,
      },
      {
        title: "'Lifili' 2020, Salice Salentino",
        details: `Lifili is a blend of Negroamaro, Malvasia Nera and Sangiovese. It's made in a warm climate and unoaked, so this is all about the fruit flavour. Expect an intense bouquet of cherry, plum and spice, a full body and balancing acidity. It's best served with cold cuts, red meat and cheese.`,
        price: 18.95,
      },
      {
        title: "Peyrassol 'Réserve des Templiers' Rosé 2020, Côtes de Provence",
        details: `Peyrassol was established in the 12th century by the Knights Templar. 
        They used it as a staging post for pilgrims setting off to the 
        Holy Land. Today, it’s home to one of the best vineyards in all 
        of Provence. Because the vineyards are at a higher altitude, 
        there’s the perfect balance between warm daytime and cool 
        night-time temperatures to make the grapes incredibly aromatic. 
        Perfect for rosé. It’s peachy and herbal – a heady distillation
        of the hills where it’s grown. With a wonderful citrusy edge, 
        it’s refreshing but full-bodied. It'll be ideal with salty foods 
        like olives.`,
        price: 28.95,
      },
    ],
  };

  const wineItem = wineList.wines.map((wine) => {
    return (
      <WineItem
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
