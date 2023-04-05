import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../components/Requests";
const Home = () => {
  return (
    <div>
      <Main />
      <Row rowId = "1"  title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row rowId = "2"  title="Popula" fetchURL={requests.requestPopular} />
      <Row rowId = "3"  title="Trending" fetchURL={requests.requestTrending} />
      <Row  rowId = "4" title="Up Coming" fetchURL={requests.requestTopRated} />
      <Row  rowId = "5" title="Up Coming" fetchURL={requests.requestHorror} />
    </div>
  );
};

export default Home;
