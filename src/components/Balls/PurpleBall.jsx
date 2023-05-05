import React from "react";

function PurpleBall() {
  return (
    <div
      style={{
        position: "absolute",
        borderRadius: "50%",
        width: window.innerWidth <= 320 ? "40px" : "60px",
        height: window.innerWidth <= 320 ? "40px" : "60px",
        left: window.innerWidth <= 320 ? "296px" : "868px",
        top: window.innerWidth <= 320 ? "236px" : "-2px",
        background:
          "radial-gradient(64% 64% at 27.25% 26.5%, rgba(236, 208, 255, 0.64) 0%, rgba(161, 93, 207, 0.24) 59.67%, rgba(118, 49, 164, 0.208) 78.59%, rgba(86, 24, 128, 0.232) 100%)",
        boxShadow: "3px 6px 27px -10px rgba(177, 118, 217, 0.25)",
        filter: "blur(5px)",
        backdropFilter: "blur(2px)",
      }}
    ></div>
    // </div>
  );
}

export default PurpleBall;
