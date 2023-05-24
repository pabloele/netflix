import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../request";

export default function Home() {
  console.log(requests.requestUpcomming);
  return (
    <>
      <Main />
      <Row rowID="1" title="Up Coming" fetchURL={requests.requestUpcomming} />
      <Row rowID="2" title="Trendig" fetchURL={requests.requestTrending} />
      <Row rowID="3" title="Top rated" fetchURL={requests.requestTopRated} />
      <Row rowID="4" title="Popular" fetchURL={requests.requestPopular} />
    </>
  );
}
