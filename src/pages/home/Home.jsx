import React from "react";
import Bottom from "../../components/bottom/Bottom";

import Hero from "../../components/heroSection/Hero";
// import Homefooter from "../../components/homefooter/Homefooter";
import NavB from "../../components/test/navB";

const Home = () => {
  return (
    <>
      <NavB />

      {/* <Navbar /> */}
      <Hero />
      <Bottom />
      {/* <Homefooter /> */}
    </>
  );
};

export default Home;
