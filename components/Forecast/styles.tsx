import { motion } from "framer-motion";
import styled from "styled-components";

export const ForecastWrapper = styled(motion.div)`
  display: flex;
  gap: 15px;
  width: 80%;
  padding: 10px;
  margin: 5vh auto 0 auto;
  overflow-x: scroll;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;
