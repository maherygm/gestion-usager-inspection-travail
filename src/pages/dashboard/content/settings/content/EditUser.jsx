import React, { useEffect, useState } from "react";
import "./_editUser.scss";
import { Button, MenuItem, Modal, Select, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import moment from "moment";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import { editutilisateur } from "../../../../../config/redux/actions/user.action";
const EditUser = ({ open, handleClose, user }) => {
  const [image, setImage] = useState(null);
  function handleDragOver(event) {
    event.preventDefault();
  }
  function handleDrop(event) {
    event.preventDefault();

    const files = event.dataTransfer.files;
    console.log(event.dataTransfer.files);

    if (files.length > 0) {
      // Accéder au premier fichier (index 0)
      const file = files[0];

      // Vérifier si le fichier est une image
      if (file.type.startsWith("image/")) {
        // Créer un objet URL pour afficher l'image
        const imageUrl = URL.createObjectURL(file);
        setImage(file);
        // Afficher l'URL de l'image dans la console
        console.log("URL de l'image:", imageUrl);
      } else {
        console.log("Le fichier déposé n'est pas une image.");
      }
    } else {
      console.log("Aucun fichier déposé.");
    }
  }
  const [utilisateurData, setUtilisateurData] = useState(user);

  useEffect(() => setUtilisateurData(user), [open]);

  const dispatch = useDispatch();

  const notifySuccess = (message) =>
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  function handleSUmbitEdit(params) {
    console.log("submit add user ", utilisateurData);
    dispatch(editutilisateur(utilisateurData));

    setUtilisateurData({
      _id: "",
      utilisateur: {
        fonction: {
          poste: "Inspecteur de Travail",
          typeUtilisateur: "",
        },
        image: {
          data: "base64-encoded-image-data",
          contentType: "",
        },
        nom: "",
        prenom: "",
        email: "",
        dateNaissance: "",
        motsDePasse: "",
      },
    });
    setImage(null);
    notifySuccess("Modification des information reusis !");
    handleClose();
  }

  function parseDate(params) {
    return "" + new Date(params);
  }
  return (
    <Modal
      open={open}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <div className={`main-edit-container ${open ? "" : "notActive"}`}>
        <h2>Modification de vos information</h2>
        <div
          className="photo-uploader"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {
            <img
              className="img-uploaded"
              src={
                !image
                  ? user.utilisateur.image.contentType
                  : URL.createObjectURL(image)
              }
              alt=""
            />
          }
        </div>
        <div className="form">
          <TextField
            variant="standard"
            color="secondary"
            label="Nom"
            fullWidth
            value={utilisateurData.utilisateur.nom}
            onChange={(e) => {
              setUtilisateurData({
                ...utilisateurData,
                utilisateur: {
                  ...utilisateurData.utilisateur,
                  nom: e.target.value,
                },
              });
            }}
          />
          <TextField
            variant="standard"
            color="secondary"
            fullWidth
            label="Prenom"
            value={utilisateurData.utilisateur.prenom}
            onChange={(e) => {
              setUtilisateurData({
                ...utilisateurData,
                utilisateur: {
                  ...utilisateurData.utilisateur,
                  prenom: e.target.value,
                },
              });
            }}
          />
          <TextField
            variant="standard"
            color="secondary"
            fullWidth
            label="Adresse Email"
            value={utilisateurData.utilisateur.email}
            onChange={(e) => {
              setUtilisateurData({
                ...utilisateurData,
                utilisateur: {
                  ...utilisateurData.utilisateur,
                  email: e.target.value,
                },
              });
            }}
          />
          <div className="select-dates-picker">
            <div>
              <label htmlFor="">Dates de Naissance</label>
              <TextField
                variant="standard"
                color="secondary"
                fullWidth
                type="date"
                value={moment
                  .utc(utilisateurData.utilisateur.dateNaissance)
                  .format("YYYY-MM-DD")}
                onChange={(e) => {
                  setUtilisateurData({
                    ...utilisateurData,
                    utilisateur: {
                      ...utilisateurData.utilisateur,
                      dateNaissance: parseDate(e.target.value),
                    },
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="">Poste</label>
              <div></div>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                variant="standard"
                value={utilisateurData.utilisateur.fonction.poste}
                onChange={(e) => {
                  setUtilisateurData({
                    ...utilisateurData,
                    utilisateur: {
                      ...utilisateurData.utilisateur,
                      fonction: {
                        ...utilisateurData.utilisateur.fonction,
                        poste: e.target.value,
                      },
                    },
                  });
                }}
              >
                <MenuItem value={"Inspecteur de Travail"}>
                  Inspecteur de Travail
                </MenuItem>
                <MenuItem value={"Controleur de Travail"}>
                  Controleur de Travail
                </MenuItem>
                <MenuItem value={"Secretaire"}>Secretaire</MenuItem>
              </Select>
            </div>
          </div>
          <TextField
            variant="standard"
            color="secondary"
            fullWidth
            label="Mots de Passe"
            type="password"
            value={utilisateurData.utilisateur.motsDePasse}
            onChange={(e) => {
              setUtilisateurData({
                ...utilisateurData,
                utilisateur: {
                  ...utilisateurData.utilisateur,
                  motsDePasse: e.target.value,
                },
              });
            }}
          />
        </div>
        <div className="footer">
          <Button color="secondary" onClick={() => handleSUmbitEdit()}>
            confirmer
          </Button>
          <Button color="secondary" onClick={() => handleClose()}>
            Annuler
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditUser;
