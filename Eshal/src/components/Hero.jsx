import React from "react";
import "./Hero.css";
import perfumeImg from './perfume.jpg';

export default function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `url(${perfumeImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        color: "white",
        height: "100vh", // full viewport height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Optional overlay for readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 1,
        }}
      ></div>

      <div style={{ position: "relative", zIndex: 2 }}>
        <h1>
          ESHAL!!!!! <strong>CELEBRATIONSSSSS</strong>
        </h1>
        <div className="hero-lines">
          <div className="hero-sub">
            <h2>MMHMM</h2>
            <h4>Events.</h4>
          </div>
          <div className="hero-sub">{/* Optional subline */}</div>
          <div className="hero-sub">{/* Optional subline */}</div>
        </div>
      </div>
    </section>
  );
}
