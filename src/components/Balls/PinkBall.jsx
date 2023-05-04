import React from "react";

function PinkBall() {
  return (
    <div
      style={{
        position: "absolute",
        borderRadius: "50%",
        width: "83px",
        height: "83px",
        left: "519px",
        top: "83px",
        background:
          "radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.536) 0%, rgba(212, 93, 93, 0.264) 59.67%, rgba(167, 49, 49, 0.248) 78.59%, rgba(130, 25, 25, 0.248) 100%)",
        boxShadow: "3px 6px 27px -10px rgba(223, 125, 125, 0.25)",
        backdropFilter: "blur(2px)",
      }}
    ></div>
  );
}

export default PinkBall;
