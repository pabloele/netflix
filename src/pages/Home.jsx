import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../request";

export default function Home() {
  return (
    <>
      <Main />
      <Row title="Up Coming" fetchURL={requests.requestUpcomming} />
      <Row title="Trendig" fetchURL={requests.requestTrending} />
      <Row title="Top rated" fetchURL={requests.requestTopRated} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
    </>
  );
}
