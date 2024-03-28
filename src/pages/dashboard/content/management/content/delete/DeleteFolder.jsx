import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const DeleteFolder = ({ open, handleClose, deleteFolder }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Supression du dossier"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Êtes-vous sûr(e) de vouloir poursuivre cette action ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button color="secondary" onClick={deleteFolder} autoFocus>
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteFolder;
