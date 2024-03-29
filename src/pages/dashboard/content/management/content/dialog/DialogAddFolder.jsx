import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Modal,
} from "@mui/material";
import SimpleButtonText from "../../../../../../components/ui/materialUibutton/SimpleButtonText";
import ColorButtonContained from "../../../../../../components/ui/materialUibutton/ColorButtonContained";
import "./__dialogAddFolder.scss";
import { Search } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { getUsager } from "../../../../../../services/backend/usagerService";
import Card from "./content/Card";
import { useDispatch } from "react-redux";

import { addDossier } from "../../../../../../config/redux/actions/dossier.action";
import { toast } from "react-toastify";
const DialogAddNewFolder = ({ open, handleClose }) => {
  const [usagers, setusagers] = useState([]);

  const [usgVal, setusgVal] = useState({
    usager: {
      nom: "",
      prenom: "",
      adresse: "",
      sexe: "",
    },
  });

  function handleClickUsager(params) {
    const usCopy = usagers.filter((usg) => usg._id === params);

    // setusgVal(usCopy[0]);
    setSlide(true);
    setDossierData({
      dossier: {
        ...dossierData.dossier,
        usager: {
          ...usCopy[0].usager,
        },
      },
    });
  }

  const [slide, setSlide] = useState(false);

  useEffect(() => {
    setSlide(false);
    const PromiseUsager = getUsager();

    PromiseUsager.then((response) => {
      setusagers([...response]);
    }).catch((error) => {
      console.log("error here" + error);
    });
  }, [open]);

  const [dossierData, setDossierData] = useState({
    dossier: {
      usager: {
        nom: "",
        prenom: "",
        adresse: "",
        sexe: "",
      },
      description: "",
      date: "" + new Date(),
      etats: "en cours",
      types: "contrat de travail",
    },
  });
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
  const notifyErr = (message) =>
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const dispatch = useDispatch();
  function handleSubmitAddDossier(params) {
    dispatch(addDossier(dossierData));
    notifySuccess("Ajouts du dossier Reussis");
    setDossierData({
      dossier: {
        usager: {
          nom: "",
          prenom: "",
          adresse: "",
          sexe: "",
        },
        description: "",
        date: "" + new Date(),
        etats: "en cours",
        types: "differend",
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
        <div
          className={`main-bloc-add`}
          style={{
            display: `${open ? "flex" : "none"}`,
          }}
        >
          <div className="dialog-header">
            <h1>Nouveu dossier</h1>
          </div>
          <div className={`dialog-body ${slide ? "active" : ""}`}>
            <div className="usage-list-container">
              <div className="search-container">
                <h3>List Usager</h3>
                <div className="action">
                  <input type="text" placeholder="Recherche" />
                  <SimpleButtonText>
                    <Search />
                  </SimpleButtonText>
                </div>
              </div>
              <div className="container-table">
                {usagers.map((usg) => (
                  <div key={usg._id} onClick={() => handleClickUsager(usg._id)}>
                    <Card usager={usg.usager} />
                  </div>
                ))}
              </div>
            </div>
            <div className="form-container">
              <form action="">
                <div className="nom">
                  <label htmlFor="">Nom </label>
                  <input
                    onChange={(e) =>
                      setDossierData({
                        dossier: {
                          ...dossierData.dossier,
                          usager: {
                            ...dossierData.dossier.usager,
                            nom: e.target.value,
                          },
                          date: "" + new Date(),
                          etats: "en cours",
                        },
                      })
                    }
                    value={dossierData.dossier.usager.nom}
                    placeholder="nom"
                  />
                </div>
                <div className="prenom">
                  <label htmlFor="">Prenom </label>
                  <input
                    onChange={(e) =>
                      setDossierData({
                        dossier: {
                          ...dossierData.dossier,
                          usager: {
                            ...dossierData.dossier.usager,
                            prenom: e.target.value,
                          },
                          date: "" + new Date(),
                          etats: "en cours",
                        },
                      })
                    }
                    value={dossierData.dossier.usager.prenom}
                    placeholder="prenom"
                  />
                </div>
                <div className="adresse">
                  <label htmlFor="">Adresse </label>
                  <input
                    onChange={(e) =>
                      setDossierData({
                        dossier: {
                          ...dossierData.dossier,
                          usager: {
                            ...dossierData.dossier.usager,
                            adresse: e.target.value,
                          },
                          date: "" + new Date(),
                          etats: "en cours",
                        },
                      })
                    }
                    value={dossierData.dossier.usager.adresse}
                    placeholder="adresse"
                  />
                </div>
                <div className="select-group">
                  <div className="sexe">
                    <label htmlFor="">Sexe </label>
                    <select
                      onChange={(e) =>
                        setDossierData({
                          dossier: {
                            ...dossierData.dossier,
                            usager: {
                              ...dossierData.dossier.usager,
                              sexe: e.target.value,
                            },
                            date: "" + new Date(),
                            etats: "en cours",
                          },
                        })
                      }
                      value={dossierData.dossier.usager.sexe}
                    >
                      <option value="Homme">Homme</option>
                      <option value="Femme">Femme</option>
                    </select>
                  </div>
                  <div className="types">
                    <label htmlFor="">Types </label>
                    <select
                      onChange={(e) =>
                        setDossierData({
                          dossier: {
                            ...dossierData.dossier,
                            date: "" + new Date(),
                            etats: "en cours",
                            types: e.target.value,
                          },
                        })
                      }
                      value={dossierData.dossier.types}
                      type="text"
                      name="types"
                    >
                      <option value="differend">Differend</option>
                      <option value="contrat de travail">
                        Contrat de travail
                      </option>
                      <option value="reglement interieur">
                        Reglement Interieur
                      </option>
                    </select>
                  </div>
                </div>
                <div className="description">
                  <label htmlFor="">Description</label>
                  <textarea
                    onChange={(e) =>
                      setDossierData({
                        dossier: {
                          ...dossierData.dossier,
                          description: e.target.value,
                          date: "" + new Date(),
                          etats: "en cours",
                        },
                      })
                    }
                    value={dossierData.dossier.description}
                    placeholder="Description"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="dialog-footer">
            {slide ? (
              <SimpleButtonText onClick={() => setSlide(false)}>
                revenir
              </SimpleButtonText>
            ) : (
              <SimpleButtonText onClick={handleClose}>annuler</SimpleButtonText>
            )}
            {!slide ? (
              <ColorButtonContained onClick={() => setSlide(true)}>
                Suivant
              </ColorButtonContained>
            ) : (
              <ColorButtonContained onClick={handleSubmitAddDossier}>
                confirmer
              </ColorButtonContained>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DialogAddNewFolder;
