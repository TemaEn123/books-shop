import TopBlock from "../../components/TopBlock/TopBlock";

import styles from "./styles.module.scss";

const title = "read and add your insight";
const text = "find your favorite book and read it here for free";

const Home = () => {
  return (
    <>
      <TopBlock title={title} text={text} page="home" />
      <main className="main"></main>
    </>
  );
};

export default Home;
