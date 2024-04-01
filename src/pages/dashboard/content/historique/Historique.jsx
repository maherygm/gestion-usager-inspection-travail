import { ArrowLeft, Check, Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../../layout/profile/Profile";
import "./__historique.scss";
import { useDispatch, useSelector } from "react-redux";
import "moment/locale/fr";
import moment from "moment";
import {
  deletePlainte,
  editPlainte,
} from "../../../../config/redux/actions/plainte.action";
import { addDossier } from "../../../../config/redux/actions/dossier.action";
import { toast } from "react-toastify";
moment.locale("fr");
const Historique = () => {
  const navigate = useNavigate();
  function handleNavigate(params) {
    navigate("/dashboard/home");
  }
  const plainte = useSelector((selector) => selector.plainteReducer);

  const dispatch = useDispatch();

  function accept(plainte) {
    let acceptedPlaite = {
      ...plainte,
      dossier: {
        ...plainte.dossier,
        accepter: true,
      },
    };

    console.log("accepted palainte", acceptedPlaite);

    dispatch(editPlainte(acceptedPlaite));
    dispatch(addDossier(acceptedPlaite));
    notifySuccess("plainte accepté !");
  }

  function deleteItem(id) {
    dispatch(deletePlainte(id));
    notifyWarn("Supprimmer");
  }

  const notifySuccess = (message) =>
    toast.warn(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notifyWarn = (message) =>
    toast.info(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  return (
    <div>
      <div className="main-admin-container">
        <div className="body-admin">
          <div className="header">
            <div className="action-container">
              <div className="back-btn" onClick={() => handleNavigate()}>
                <IconButton className="icons">
                  <ArrowLeft />
                </IconButton>
                <p>Retour</p>
              </div>
              <Profile />
            </div>
            <h1>Plaintes Reçus</h1>
            <div className="section-one">
              <div className="header-section">
                <h3>Listes des Plaintes</h3>
              </div>
              <div className="conteiner-plainte">
                {plainte.map((pl, index) => {
                  if (!pl.dossier.accepter) {
                    return (
                      <div key={index} className="plainte">
                        <p className="objet">{pl.dossier.description}</p>
                        <div className="usager">
                          <p>{pl.dossier.usager.nom}</p>
                          <p>{pl.dossier.usager.prenom}</p>
                        </div>
                        <div className="dates">
                          <p>{moment.utc(pl.dossier.date).format("LL")}</p>
                        </div>
                        <div className="action">
                          <IconButton className="icons">
                            <Close onClick={() => deleteItem(pl._id)} />
                          </IconButton>
                          <IconButton
                            className="icons"
                            onClick={() => accept(pl)}
                          >
                            <Check />
                          </IconButton>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historique;
