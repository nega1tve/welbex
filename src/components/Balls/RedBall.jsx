import React from "react";

function RedBall() {
  if (window.innerWidth <= 320) {
    return (
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          zIndex: "1",
          width: "43px",
          height: "43px",
          left: "29px",
          top: "462px",
          background:
            "radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.536) 0%, rgba(212, 93, 93, 0.264) 59.67%, rgba(167, 49, 49, 0.248) 78.59%, rgba(130, 25, 25, 0.248) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */",
          boxShadow: "3px 6px 27px -10px rgba(223, 125, 125, 0.25)",
          backdropFilter: "blur(2px)",
        }}
      ></div>
    );
  } else {
    return (
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          width: "28px",
          height: "28px",
          left: "851px",
          top: "547px",
          background:
            "radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.48) 0%, rgba(212, 93, 93, 0.248) 59.67%, rgba(167, 49, 49, 0.264) 78.59%, rgba(130, 25, 25, 0.232) 100%)",
          boxShadow: "3px 6px 27px -10px rgba(223, 125, 125, 0.25)",
          filter: "blur(2.5px)",
          backdropFilter: "blur(2px)",
        }}
      ></div>
    );
  }
}

export default RedBall;
