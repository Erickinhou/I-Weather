import Image from "next/image";
import React from "react";
import { fadeIn } from "../../animations";
import { NavbarWrapper, Title } from "./styles";

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper variants={fadeIn} initial="hidden" animate="show">
      <Image
        width={80}
        height={100}
        src="/images/weather-icon.png"
        alt="weather-icon"
      />
      <Title>I-Weather</Title>
    </NavbarWrapper>
  );
};

export default Navbar;
