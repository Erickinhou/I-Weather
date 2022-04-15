import Image from "next/image";
import React from "react";
import { Container, Title } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Image
        width={100}
        height={140}
        src="/images/weather-icon.png"
        alt="weather-icon"
      />
      <Title>I-Weather</Title>
    </Container>
  );
};

export default Navbar;
