import Image from "next/image";
import React from "react";
import { NavbarWrapper, Title } from "./styles";

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <Image
        width={100}
        height={140}
        src="/images/weather-icon.png"
        alt="weather-icon"
      />
      <Title>I-Weather</Title>
    </NavbarWrapper>
  );
};

export default Navbar;
