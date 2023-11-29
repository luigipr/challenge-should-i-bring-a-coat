import styled from "styled-components";
import React from "react";

export function SideHeader({ dataPage, weather, boardPage, city, data, board }) {
    let color1= data ? '#222222' : '#C8C8C8';
    let color2= board ? '#222222' : '#C8C8C8';

  return (
    <SideHeaderContainer>
      <div>
        <h2 onClick={dataPage} style={{ color: color1 }}>
          Hoje
        </h2>
        <h2 onClick={boardPage} style={{ color: color2 }}>
          Próximos dias
        </h2>
      </div>
      <h1>{city}</h1>
      <p>
        Lat: {weather?.coord.lat} Lon: {weather?.coord.lon}
      </p>
    </SideHeaderContainer>
  );
}

const SideHeaderContainer = styled.div`
    padding-top: 50px;
    font-family: Poppins;
    font-size: 48px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    padding-bottom: 50px;

    div {
        display: flex;
        padding-bottom: 80px;
        gap: 50px;
    }

    h1 {
        font-size: 120px;
        padding-bottom: 10px;
    }

    p {
        font-size: 12px;
        font-weight: 200;
    }

    @media screen and (max-width: 412px) {
     width: 100%; 
    h1 {
      font-size: 80px; /* Reduzindo o tamanho do título */
    }
    p {
      font-size: 20px; /* Reduzindo o tamanho do parágrafo */
    }
  }`;
