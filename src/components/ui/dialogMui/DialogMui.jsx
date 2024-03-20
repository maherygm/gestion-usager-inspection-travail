import { Dialog } from "@mui/material";
import React from "react";

const DialogMui = ({ handleClose, open, Transition, content }) => {
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div
          style={{
            backgroundColor: "var(--fds-alpha-80)",
            color: "var(--fds)",
          }}
        >
          {content}
        </div>
      </Dialog>
    </>
  );
};

export default DialogMui;
