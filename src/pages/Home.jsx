import React from "react";
import Header from "../components/Header";
import Setup from "../components/Setup";
import Description from "../components/Description";
import Testimonials from "../components/Testimonials";
import GenerateBtn from "../components/GenerateBtn";


const Home = () => {
  return (
    <div>

    <Header/>
    <Setup/>
    <Description/>
    <Testimonials/>
    <GenerateBtn/>
    </div>
  );
};

export default Home;
