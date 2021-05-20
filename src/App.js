import Header from "./components/Header/Header";
import WelcomeCard from "./components/WelcomeCard/WelcomeCard";
import WineList from "./components/WineList/WineList";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import Modal from "./components/UI/Modal/Modal";
import styles from "./App.module.scss";
function App() {
  return (
    <div className="App">
      <Backdrop>
        <Modal className={styles.Modal} />
      </Backdrop>
      <Header></Header>
      <main className={styles.Main}>
        <WelcomeCard />
        <WineList />
      </main>
    </div>
  );
}

export default App;
