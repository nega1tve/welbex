import React from "react";

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
      <>
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
      </>
    );
  }
};

export default RedLights;
