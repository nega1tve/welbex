import "./App.css";
import PinkBall from "./components/Balls/PinkBall";
import PurpleBall from "./components/Balls/PurpleBall";
import RedBall from "./components/Balls/RedBall";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import RedLights from "./components/RedLights";
import React, { useState, useEffect } from "react";

// function App() {
//   const [showLights, setShowLights] = useState(false);

//   return (
//     <>

//       <Header />
//       <Main />
//       <Footer />

//       <RedLights />
//       <RedBall />
//       <PurpleBall />
//       <PinkBall />
//     </>
//   );
// }

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {width > 320 ? (
        <>
          <Header />
          <Main />
          <Footer />
          <RedLights />
          <RedBall />
          <PurpleBall />
          <PinkBall />
        </>
      ) : (
        <>
          <Header />
          <Main />
          <Footer />
          {/* <RedLights /> */}
          <RedBall />
        </>
      )}
    </>
  );
}

export default App;
