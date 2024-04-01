import React, { useEffect, useState } from "react";
import "./__cardUser.scss";
import { CalendarMonth, Delete, Mail } from "@mui/icons-material";

import moment from "moment";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteutilisateur } from "../../../../../../config/redux/actions/user.action";
import DeleteUser from "../delete/DeleteUser";
import { toast } from "react-toastify";
import "moment/locale/fr";
moment.locale("fr");
const CardUser = ({ user }) => {
  const dispatch = useDispatch();

  const [useDelete, setUserDelete] = useState("" + user._id);

  function handleDelete(params) {
    dispatch(deleteutilisateur(useDelete + ""));
    notifySuccess("utilisateurs supprimer !");
    handleClose();
  }
  const [open, setOpen] = useState(false);
  function handleClose(params) {
    setOpen(false);
  }
  const [ViewDelete, setViewDelete] = useState(false);

  useEffect(() => {
    const userSession = JSON.parse(sessionStorage.getItem("connnectedUser"));

    console.log(userSession, " ", user);

    if (userSession._id !== user._id) {
      setViewDelete(true);
    } else {
      setViewDelete(false);
    }
  });

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
  return (
    <div className="card-main-container">
      <DeleteUser
        handelDelete={handleDelete}
        open={open}
        handleClose={handleClose}
      />
      <div
        className="img-container"
        style={{
          backgroundImage: `url(${user.utilisateur.image.contentType})`,
        }}
      >
        {ViewDelete && (
          <div className="del">
            <div className="icons-delete">
              <IconButton onClick={() => setOpen(true)} className="icons">
                <Delete />
              </IconButton>
              <p>Effacer</p>
            </div>
          </div>
        )}
        <div className="black-screeen"></div>
        <h1 className="">{user.utilisateur.fonction.poste}</h1>
        <div className="content-card">
          <div className="nom-prenom">
            <h3>{user.utilisateur.nom}</h3>
            <p className="prenom">{user.utilisateur.prenom}</p>
          </div>
          <div className="email-date-naiss">
            <p>
              <Mail />
              {user.utilisateur.email}
            </p>
            <p>
              <CalendarMonth />
              Née le {moment.utc(user.utilisateur.dateNaissance).format("LL")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
