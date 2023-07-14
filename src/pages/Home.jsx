import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../request";

export default function Home() {
  return (
    <>
      <Main />
      <Row
        rowID="1"
        title="Próximos estrenos"
        fetchURL={requests.requestUpcomming}
      />
      <Row rowID="2" title="Más vistas" fetchURL={requests.requestTrending} />
      <Row
        rowID="3"
        title="Mejor puntuadas"
        fetchURL={requests.requestTopRated}
      />
      <Row rowID="4" title="Populares" fetchURL={requests.requestPopular} />
    </>
  );
}
