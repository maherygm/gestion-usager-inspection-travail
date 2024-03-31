import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./__index.scss";
import SpeechTotexte from "../../components/speechtotexte/SpeechTotexte";
import Weather from "../../components/weather/weather";
const Index = () => {
  const [open, setOpen] = useState(false);
  function handleClose(params) {
    setOpen(false);
  }
  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <Outlet />

      <div
        style={{
          zIndex: 999,
        }}
        className="btn-open-snote"
        onClick={() => setOpen(true)}
      >
        Spetch to texte
      </div>
      <SpeechTotexte open={open} handleClose={handleClose} />
    </div>
  );
};

export default Index;
