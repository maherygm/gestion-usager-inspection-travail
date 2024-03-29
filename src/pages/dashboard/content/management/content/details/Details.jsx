import { Avatar, Modal } from "@mui/material";
import React from "react";
import "./__details.scss";
import SimpleButtonText from "../../../../../../components/ui/materialUibutton/SimpleButtonText";
import moment from "moment";
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

            <h1>
              {details.dossier.usager.nom + " " + details.dossier.usager.prenom}
            </h1>
            <h4>
              {" Etats du dossiers : "}
              <SimpleButtonText>{details.dossier.etats}</SimpleButtonText>
            </h4>
          </div>
          <hR></hR>
          <h4>Date du {moment.utc(details.dossier.date).format("lll")}</h4>
          <h4>
            {" Types du dossiers : "}
            <SimpleButtonText>{details.dossier.types}</SimpleButtonText>
          </h4>

          <h5>Objets du dossiers</h5>
          <p>{details.dossier.description}</p>
        </div>
      </div>
    </Modal>
  );
};

export default Details;
