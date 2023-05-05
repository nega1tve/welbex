import RedBall from "./Balls/RedBall";
import PurpleBall from "./Balls/PurpleBall";
import LittleRedBall from "./Balls/LittleRedBall";
import YellowBall from "./Balls/YellowBall";

const RedLights = () => {
  if (window.innerWidth > 320) {
    return (
      <>
        <div
          style={{
            position: "absolute",
            width: "311px",
            height: "311px",
            left: "-102px",
            top: "251px",
            background: "#961A1A",
            opacity: 0.5,
            filter: "blur(196px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "259px",
            height: "259px",
            left: "602px",
            top: "-154px",
            background: "#833AB4",
            opacity: 0.5,
            filter: "blur(196px)",
          }}
        />
      </>
    );
  } else {
    return (
      <div
        style={{
          position: "relative",
          width: "320px",
          height: "445px",
          top: "55px",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "320px",
            height: "445px",
            left: "0px",
            top: "0px",
            background:
              "radial-gradient(238.53% 189.02% at 3.2% 3.49%, rgba(255, 246, 233, 0.1) 0%, rgba(26, 29, 35, 0.1) 26.62%, rgba(26, 29, 35, 0.1) 52.1%, rgba(26, 29, 35, 0.01) 70.17%, rgba(26, 29, 35, 0) 100%)",
            opacity: 0.8,
            filter: "blur(7.5px)",
            zIndex: -1,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "259px",
            height: "259px",
            left: "258px",
            top: "107px",
            background: "#833AB4",
            opacity: 0.5,
            filter: "blur(196px)",
            zIndex: -1,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "211px",
            height: "210px",
            left: "-55px",
            top: "241px",
            background: "#961A1A",
            opacity: 0.5,
            filter: "blur(196px)",
            zIndex: -1,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "200px",
            height: "200px",
            left: "-66px",
            top: "519px",
            background: "#FCB045",
            opacity: 0.4,
            filter: "blur(196px)",
            zIndex: -1,
          }}
        />
        <RedBall />
        <PurpleBall />
        <LittleRedBall />
        <YellowBall />
      </div>
    );
  }
};

export default RedLights;
