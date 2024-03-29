import {
  Button,
  MenuItem,
  Modal,
  Select,
  TextField,
  TextareaAutosize,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./__edit.scss";
import { useDispatch } from "react-redux";
import { editDossier } from "../../../../../../config/redux/actions/dossier.action";
import { toast } from "react-toastify";
import "moment/locale/fr";
import moment from "moment";
moment.locale("fr");
const EditFolder = ({ open, handleClose, dossier }) => {
  const [folderEdit, setfolderEdit] = useState({
    dossier: {
      usager: {
        nom: "",
        prenom: "",
        adresse: "",
        sexe: "",
      },
      description: "",
      date: "",
      etats: "",
      types: "",
    },
    _id: "",
    __v: 0,
  });
  useEffect(() => setfolderEdit(dossier), [open]);
  const notifySuccess = (message) =>
    toast.info(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const dispatch = useDispatch();

  function handleSubmitEdit(params) {
    // console.log("edited folder ", folderEdit);

    dispatch(editDossier(folderEdit));

    notifySuccess("Modification du dossier Reussis");
    setfolderEdit({
      dossier: {
        usager: {
          nom: "",
          prenom: "",
          adresse: "",
          sexe: "",
        },
        description: "",
        date: "",
        etats: "",
        types: "",
      },
    });
    handleClose();
  }
  return (
    <div>
      <Modal
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={`main-edit-container ${open ? "" : "notActive"}`}>
          <div className="header-edit">
            <h3>Modification du dossier</h3>
            <p>
              Dossier enregistrer le{" "}
              {moment.utc(dossier.dossier.date).format("lll")}
            </p>
          </div>
          <div className="main-edit">
            <div className="usager-info-container">
              <TextField
                label="Nom"
                variant="standard"
                color="secondary"
                fullWidth
                value={folderEdit.dossier.usager.nom}
                onChange={(e) =>
                  setfolderEdit({
                    ...folderEdit,
                    dossier: {
                      ...folderEdit.dossier,
                      usager: {
                        ...folderEdit.dossier.usager,
                        nom: e.target.value,
                      },
                    },
                  })
                }
              />
              <TextField
                label="prenom"
                variant="standard"
                color="secondary"
                fullWidth
                value={folderEdit.dossier.usager.prenom}
                onChange={(e) =>
                  setfolderEdit({
                    ...folderEdit,
                    dossier: {
                      ...folderEdit.dossier,
                      usager: {
                        ...folderEdit.dossier.usager,
                        prenom: e.target.value,
                      },
                    },
                  })
                }
              />
              <div className="adr-select">
                <TextField
                  label="adresse"
                  variant="standard"
                  color="secondary"
                  fullWidth
                  value={folderEdit.dossier.usager.adresse}
                  onChange={(e) =>
                    setfolderEdit({
                      ...folderEdit,
                      dossier: {
                        ...folderEdit.dossier,
                        usager: {
                          ...folderEdit.dossier.usager,
                          adresse: e.target.value,
                        },
                      },
                    })
                  }
                />
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Sexe"
                  value={folderEdit.dossier.usager.sexe}
                  onChange={(e) =>
                    setfolderEdit({
                      ...folderEdit,
                      dossier: {
                        ...folderEdit.dossier,
                        usager: {
                          ...folderEdit.dossier.usager,
                          sexe: e.target.value,
                        },
                      },
                    })
                  }
                  variant="standard"
                  color="secondary"
                >
                  <MenuItem value={"Homme"}>Homme</MenuItem>
                  <MenuItem value={"Femme"}>Femme</MenuItem>
                </Select>
              </div>
            </div>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Types"
              value={folderEdit.dossier.types}
              variant="standard"
              color="secondary"
              onChange={(e) =>
                setfolderEdit({
                  ...folderEdit,
                  dossier: {
                    ...folderEdit.dossier,
                    types: e.target.value,
                  },
                })
              }
            >
              <MenuItem value={"differend"}>Differend</MenuItem>
              <MenuItem value={"contrat de travail"}>
                Contrat de Travail
              </MenuItem>
              <MenuItem value={"reglement interieur"}>
                Reglement Interieur
              </MenuItem>
            </Select>

            <ToggleButtonGroup
              exclusive
              aria-label="Platform"
              color="secondary"
              value={folderEdit.dossier.etats}
              onChange={(e) =>
                setfolderEdit({
                  ...folderEdit,
                  dossier: {
                    ...folderEdit.dossier,
                    etats: e.target.value,
                  },
                })
              }
            >
              <ToggleButton value="en cours">En Cours</ToggleButton>
              <ToggleButton value="traite">Traite</ToggleButton>
              <ToggleButton value="refuser">Refuse</ToggleButton>
            </ToggleButtonGroup>
            <div className="text-container">
              <label htmlFor="">Description</label>
              <textarea
                onChange={(e) =>
                  setfolderEdit({
                    ...folderEdit,
                    dossier: {
                      ...folderEdit.dossier,
                      description: e.target.value,
                    },
                  })
                }
                className="text-area"
                placeholder="Description"
                value={folderEdit.dossier.description}
              />
            </div>
          </div>
          <div className="footer-edit">
            <Button color="secondary" onClick={() => handleSubmitEdit()}>
              Modifier
            </Button>
            <Button color="secondary" onClick={() => handleClose()}>
              Annuler
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditFolder;
