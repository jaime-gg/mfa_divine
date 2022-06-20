import React from "react";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";

const Home = (props) => {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    return (
        <div className="wrapper row">
            <Hero /> 

            <Gallery props={props}></Gallery> 
        </div>
    );
};


export default Home;