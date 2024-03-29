import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteDossier } from "../../../../../../config/redux/actions/dossier.action";
import { toast } from "react-toastify";

const DeleteFolder = ({ open, handleClose, deleteFolder, idFolder }) => {
  const notifyWarn = (message) =>
    toast.warn(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const dispatch = useDispatch();
  function deleteF(params) {
    dispatch(deleteDossier(idFolder + ""));
    notifyWarn("Dossier Effacer");
    handleClose();

    console.log("deleted :", idFolder);
  }
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
          <Button color="secondary" onClick={() => deleteF()} autoFocus>
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteFolder;
