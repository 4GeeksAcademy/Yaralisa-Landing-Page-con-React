import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footern } from "./footer";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="row">
       <div  className="col"><Card titulo="tarjeta1" texto=" tex" /></div> 
        <div className="col"><Card titulo="tarjeta2" texto=" tex" /></div>
		<div className="col"><Card titulo="tarjeta3" texto=" tex" /></div>
		<div className="col"><Card titulo="tarjeta4" texto=" tex" /></div>
      </div>
	  <Footern/>
    </>
  );
};

export default Home;
