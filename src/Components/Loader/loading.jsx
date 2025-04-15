import React from "react";
export default function Loader() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#0B0D17",
        color: "#fff",
        gap: "1rem",
        fontSize: "2rem",
      }}
    >
      <h2 className="textm-md font-bellefair">Loading...</h2>
    </div>
  );
}
