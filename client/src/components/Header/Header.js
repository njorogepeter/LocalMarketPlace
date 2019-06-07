import React from "react";
import sytled from "styled-components";
import heroImage from "../../img/farm.jpg";

const headerStyle = {
  "backgroundImage": `url(${heroImage})`,
  "maxWidth": "100%",
  height: "calc(100vw * .43333)",
  "backgroundSize": "cover",
  position: "relative",
}

function Header() {
    return (
        <header style={headerStyle}>
            <Title>Making It Easier To Sell</Title>
        </header>
    );
}
const Title = sytled.h1`
    text-align: center;
    color: white;
    font-size 7vw;
    padding: 15% 0 3%;
    
`;

export default Header;