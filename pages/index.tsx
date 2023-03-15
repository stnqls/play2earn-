import type { NextPage } from "next";
import Login from "./Login";
import Body from "./Body";

import "../styles/pages/home.scss";

const Home: NextPage = () => {
  return (
    <div className="home">
      <Body />
    </div>
  );
};

export default Home;
