import React from "react";

function LittleRedBall() {
  return (
    <div
      style={{
        position: "absolute",
        width: "18px",
        height: "18px",
        left: "278px",
        top: "563px",
        background:
          "radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.48) 0%, rgba(212, 93, 93, 0.248) 59.67%, rgba(167, 49, 49, 0.264) 78.59%, rgba(130, 25, 25, 0.232) 100%)",
        boxShadow: "3px 6px 27px -10px rgba(223, 125, 125, 0.25)",
        filter: "blur(2.5px)",
        backdropFilter: "blur(2px)",
      }}
    ></div>
  );
}

export default LittleRedBall;
