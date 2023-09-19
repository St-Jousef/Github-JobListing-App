import React from "react";
import Navigation from "./components/pages/Navigation";
import Joblist from "./components/Joblist";

const App = () => {
  return (
    <div>
      <Navigation />
      <section>
        <img
          src="./backgroundImg.png"
          alt="back-ground-img"
          style={{ width: "100%", height: "auto" }}
        />
      </section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 0px",
          width: "100%",
        }}
      >
        <div style={{ width: "33%" }}>
          <p>left</p>
        </div>
        <div style={{ width: "63%" }}>
          <Joblist />
        </div>
      </div>
    </div>
  );
};

export default App;
