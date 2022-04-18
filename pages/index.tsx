import { useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { Coordinates } from "../common/interfaces";
import Forecast from "../components/Forecast";
import { AnimatePresence } from "framer-motion";

const Home: NextPage = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>();
  return (
    <div>
      <Head>
        <title>I-Weather</title>
      </Head>
      <ToastContainer />
      <Navbar />
      <SearchBar setCoordinates={setCoordinates} />
      <AnimatePresence exitBeforeEnter>
        {coordinates && <Forecast coordinates={coordinates} />}
      </AnimatePresence>
    </div>
  );
};

export default Home;
