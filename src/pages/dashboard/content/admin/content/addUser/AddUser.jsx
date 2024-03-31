import React, { useState } from "react";
import "./__addUser.scss";
import { Button, MenuItem, Modal, Select, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addutilisateur } from "../../../../../../config/redux/actions/user.action";
import { toast } from "react-toastify";
const AddUser = ({ open, handleClose }) => {
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
  const [utilisateurData, setUtilisateurData] = useState({
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
  function handleSUmbitAdd(params) {
    console.log("submit add user ", utilisateurData);
    dispatch(addutilisateur(utilisateurData, image));

    setUtilisateurData({
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
    notifySuccess("Ajouts de l'utilisateurs reusis !");
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
        <h2>AJouter Un nouveau utilisateur</h2>
        <div
          className="photo-uploader"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {!image ? (
            <>
              {" "}
              <Add className="icons" />
              <h4>Deplacer Votre Photo de Profil Ici</h4>
            </>
          ) : (
            // <div
            //   className="img-uploaded"
            //   style={{
            //     background: `url(${URL.createObjectURL(image)})`,
            //   }}
            // ></div>
            <img
              className="img-uploaded"
              src={URL.createObjectURL(image)}
              alt=""
            />
          )}
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
                utilisateur: {
                  ...utilisateurData.utilisateur,
                  motsDePasse: e.target.value,
                },
              });
            }}
          />
        </div>
        <div className="footer">
          <Button color="secondary" onClick={() => handleSUmbitAdd()}>
            Ajouter
          </Button>
          <Button color="secondary" onClick={() => handleClose()}>
            Annuler
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddUser;
