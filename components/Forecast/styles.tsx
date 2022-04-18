import { motion } from "framer-motion";
import styled from "styled-components";

export const ForecastWrapper = styled(motion.div)`
  display: flex;
  gap: 15px;
  width: 80%;
  padding: 10px;
  margin: auto;
  overflow-x: scroll;
`;
