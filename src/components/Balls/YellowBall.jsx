import React from "react";

function YellowBall() {
  return (
    <div
      style={{
        position: "absolute",
        width: "25px",
        height: "25px",
        left: "46px",
        top: "629px",
        transform: "rotate(90deg)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "25px",
          height: "26px",
          left: "25px",
          top: "0px",
          background: "url(.png)",
          mixBlendMode: "overlay",
          opacity: "0.05",
          borderRadius: "29px",
          transform: "rotate(90deg)",
          boxShadow:
            "0px 4px 4px rgba(0, 0, 0, 0.25), inset -4px 4px 7px rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(2.5px)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "25px",
          height: "25px",
          left: "0px",
          top: "0px",
          background:
            "radial-gradient(84.78% 84.78% at 0% 11.96%, rgba(255, 233, 203, 0.568) 0%, rgba(184, 131, 18, 0.448) 100%)",
          boxShadow:
            "0px 4px 4px rgba(0, 0, 0, 0.25), inset -4px 4px 7px rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(2.5px)",
          transform: "matrix(0, 1, 1, 0, 0, 0)",
          borderRadius: "50%",
        }}
      ></div>
    </div>
  );
}

export default YellowBall;
