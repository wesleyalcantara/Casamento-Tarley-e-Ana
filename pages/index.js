import React from "react";
import { Cabecalho } from "../components/Cabecalho";
import { MainHome } from "../components/MainHome";
import { Botao } from "../components/Botao";
import { Mapa } from "../components/Mapa";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Cabecalho />
      <MainHome />
      <Botao/>
      <Mapa/>
      <Footer/>
    </>
  );
}

export default Home;