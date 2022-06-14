import React from "react";
import Mainhero from "../components/Hero";
import Gallery from "../components/Gallery";

const Home = () => {

    return (
        <div className="wrapper row">
            <Mainhero /> 

            <Gallery /> 
        </div>
    );
};


export default Home;