import { Avatar, Modal } from "@mui/material";
import React from "react";
import "./__details.scss";
import SimpleButtonText from "../../../../../../components/ui/materialUibutton/SimpleButtonText";
const Details = ({ open, handleClose, details }) => {
  return (
    <Modal
      open={open}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <div
        className={`main-bloc-details`}
        style={{
          display: `${open ? "flex" : "none"}`,
        }}
      >
        <div className="dialog-body">
          <div className="p">
            <Avatar
              sx={{
                width: "100px",
                height: "100px",
              }}
            ></Avatar>

            <h1>{details.usageName}</h1>
          </div>
          <hR></hR>
          <h4>Date du {details.dates}</h4>
          <h4>
            {" Types du dossiers : "}
            <SimpleButtonText>{details.type}</SimpleButtonText>
          </h4>

          <h5>Objets du dossiers</h5>
          <p>{details.desc}</p>
        </div>
      </div>
    </Modal>
  );
};

export default Details;
