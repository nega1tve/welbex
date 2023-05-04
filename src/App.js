import "./App.css";
import PinkBall from "./components/Balls/PinkBall";
import PurpleBall from "./components/Balls/PurpleBall";
import RedBall from "./components/Balls/RedBall";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import RedLights from "./components/RedLights";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />

      <RedLights />
      <RedBall />
      <PurpleBall />
      <PinkBall />
    </>
  );
}

export default App;
