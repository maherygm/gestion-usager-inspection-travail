import React, { useEffect, useState } from "react";
import "./_settings.scss";
import Profile from "../../layout/profile/Profile";
import { useNavigate } from "react-router-dom";
import { Avatar, IconButton } from "@mui/material";
import { ArrowLeft, Edit, Email, Key } from "@mui/icons-material";
import { useSelector } from "react-redux";
import "moment/locale/fr";

import moment from "moment";
import EditUser from "./content/EditUser";
moment.locale("fr");
const Settings = () => {
  const navigate = useNavigate();
  function handleNavigate(params) {
    navigate("/dashboard/home");
  }

  const userConnected = JSON.parse(sessionStorage.getItem("connnectedUser"));
  const userRedux = useSelector((selector) => selector.userReducer);

  // function getUser(params) {
  //   userConnected = JSON.parse(sessionStorage.getItem("connnectedUser"));
  // }
  // useEffect(() => {
  //   getUser();
  // }, []);

  function getLengtStr(params) {
    return [...params].length;
  }

  const [open, setOpen] = useState(false);
  function handleClose(params) {
    setOpen(false);
  }

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
            <h1>Votre Profil</h1>
            <div className="section-one">
              <div className="header-section">
                <h3>Vos Information Personnelle</h3>
              </div>
              <div className="body-section">
                {userRedux.map((user, index) => {
                  if (user._id === userConnected._id) {
                    return (
                      <>
                        <EditUser
                          user={user}
                          open={open}
                          handleClose={handleClose}
                        />
                        <div className="header-section">
                          <div className="profil-section" key={index}>
                            <Avatar
                              className="avatar"
                              src={user.utilisateur.image.contentType}
                              variant="circular"
                            />
                            <div className="User-name">
                              <h1>{user.utilisateur.nom}</h1>
                              <p className="prenom">
                                {user.utilisateur.prenom}
                              </p>
                              <p className="mail">
                                <Email />
                                {user.utilisateur.email}
                              </p>
                            </div>
                          </div>
                          <div className="fonction">
                            <IconButton
                              onClick={() => setOpen(true)}
                              className="icons"
                            >
                              <Edit />
                            </IconButton>
                            <h1>{user.utilisateur.fonction.poste}</h1>
                          </div>
                        </div>
                        <div className="content">
                          <p className="date-naissance">
                            Votre date de Naissance : le{" "}
                            {moment
                              .utc(user.utilisateur.dateNaissance)
                              .format("LL")}
                          </p>
                          <p className="date-naissance">
                            Mots de Passe : {user.utilisateur.motsDePasse}
                          </p>
                        </div>
                      </>
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

export default Settings;
