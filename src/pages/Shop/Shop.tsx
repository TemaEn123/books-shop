import TopBlock from "../../components/TopBlock/TopBlock";

import styles from "./styles.module.scss";

const title = "appreciate your author's work";
const text = "find your favorite book and read it here for free";

const Shop = () => {
  return (
    <>
      <TopBlock title={title} text={text} page="shop" />
      <main className="main"></main>
    </>
  );
};

export default Shop;
