import React from "react";
import styled from "@emotion/styled";

const HeroStyle = styled.section`
  display: flex;
  justify-content: center;
  background-image: url("https://www.melia.com/wps/wcm/connect/melia/2e19d8f9-52f9-428d-acef-f8e2d83c7745/319MeliaCastilla-Pool+%281%29.jpg?MOD=AJPERES&CONVERT_TO=url&CACHEID=2e19d8f9-52f9-428d-acef-f8e2d83c7745");
  background-size: cover;
  min-height: 600px;

  > header {
    text-align: center;
    width: 60%;
    align-self: center;
    color: white;
    text-transform: uppercase;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.4);
  }
`;

function Hero() {
  return (
    <HeroStyle>
      <header>
        <h1>meliá castilla</h1>
      </header>
    </HeroStyle>
  );
}

export default Hero;
