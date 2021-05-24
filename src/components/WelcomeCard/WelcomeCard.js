import styles from "./WelcomeCard.module.scss";

const WelcomeCard = () => {
  return (
    <div className={styles.WelcomeCard}>
      <h2>Best wines on one place, for you</h2>
      <p>
        Choose your favorite wine from our wide selection of best wine choices
      </p>
      <p>
        "Accept what life offers you and try to drink from every cup. All wines
        should be tasted, some should only be sipped, but with others, drink the
        whole bottle."
      </p>
    </div>
  );
};

export default WelcomeCard;
