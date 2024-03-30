import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./__index.scss";
import SpeechTotexte from "../../components/speechtotexte/SpeechTotexte";
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

      <div className="btn-open-snote" onClick={() => setOpen(true)}>
        open Note
      </div>
      <SpeechTotexte open={open} handleClose={handleClose} />
    </div>
  );
};

export default Index;
