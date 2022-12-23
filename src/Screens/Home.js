import React from "react";
import Nav from "../Components/Nav/Nav";
import Slider from "../Components/Slider/Slider";
import "../App.css";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <React.Fragment>
      <div>
        <Nav/>
      <Slider/>
      <Footer/>
      </div>
      {/* <header>
        <div style={{ height: "40%" }}>
          <Nav />
        </div>
        <div
        style={{
          width:'100%',
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center'
        }}
        >
          <img 
          class="animate__animated animate__fadeInLeft"
          style={{
            position:'relative',
            bottom:'100px'
          }} width="300px" height="300px" src="./Assets/footie.png" />
          <img
          style={{
            position:'relative',
            bottom:'180px',
            right:'40px'
          }}
            class="animate__animated animate__fadeInUp"
            width="800px"
            height="120px"
            src="./Assets/Footie-Text.png"
          />
        </div>
      </header> */}
    </React.Fragment>
  );
}

export default Home;
