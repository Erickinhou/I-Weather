import { motion } from "framer-motion";
import styled from "styled-components";

export const NavbarWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 12px 0 12px 0;
  font-weight: bold;
  color: #0c4a6e;
  font-family: "Montserrat", sans-serif;
`;
