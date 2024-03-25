import React, { useRef, useState } from "react";
import "./__profile.scss";
import {
  Avatar,
  Badge,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
} from "@mui/material";

import icons from "../../../../assets/branding/img/400x500/img30.jpg";
import {
  Announcement,
  Help,
  Logout,
  Person,
  Settings,
} from "@mui/icons-material";
import styled from "styled-components";
import ColorButtonText from "../../../../components/ui/materialUibutton/ColorButtonText";
import ColorButtonContained from "../../../../components/ui/materialUibutton/ColorButtonContained";
import SimpleButtonText from "../../../../components/ui/materialUibutton/SimpleButtonText";
import { NavLink, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

import logoutannimation from "../../../../assets/lotties/logout.json";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Profile = ({ profileName, profileIcons, notification }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const handleChangeRoute = () => {
    handleClose();
    setTimeout(() => navigate("/"), 2000);
  };

  const handleCickOpenPoper = () => {
    SetOpenPoper(!openPoper);
    annimate();
  };

  const [openPoper, SetOpenPoper] = useState(false);

  const lottieRef = useRef(null);

  function annimate(params) {
    lottieRef.current.play();
  }
  return (
    <>
      <div className="main-container-profile">
        <p>{profileName ? profileName : "Rakotomalala Jean Mahery"}</p>
        <div className="img">
          <IconButton onClick={handleCickOpenPoper}>
            <Badge
              badgeContent={notification ? notification : 4}
              color="secondary"
            >
              <Avatar src={profileIcons ? profileIcons : icons} />
            </Badge>
          </IconButton>

          {openPoper && (
            <div className="modal-poper">
              <div className="main-container-poper">
                <div className="header-poper">
                  <Avatar
                    sx={{ width: 64, height: 64 }}
                    src={profileIcons ? profileIcons : icons}
                  />
                  <p>
                    {profileName ? profileName : "Rakotomalala Jean Mahery"}
                  </p>
                </div>
                <hr />
                <ul>
                  <li>
                    <Person /> <p> Compte Utilisateur</p>
                  </li>
                  <li>
                    <Settings /> <p> Parametre et confidentialite</p>
                  </li>
                  <li>
                    <Help /> <p>Aide et Assistances</p>
                  </li>
                  <li>
                    <Announcement /> <p>Avis Personnels</p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <IconButton onClick={handleClickOpen} className="icons">
          <Logout />
        </IconButton>
      </div>

      {/* dialog log out */}
      <>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <div
            style={{
              backgroundColor: "var(--fds-alpha-80)",
              color: "var(--fds)",
            }}
          >
            <DialogTitle>
              {"Vouz Voulez vraiment vous deconnecter ?"}
            </DialogTitle>
            <DialogContent>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    position: "absolute",
                  }}
                >
                  <Lottie
                    lottieRef={lottieRef}
                    animationData={logoutannimation}
                  />
                </div>
              </div>
            </DialogContent>
            <DialogActions>
              <SimpleButtonText onClick={handleClose}>annuler</SimpleButtonText>
              <ColorButtonContained onClick={handleChangeRoute}>
                Se deconnecter
              </ColorButtonContained>
            </DialogActions>
          </div>
        </Dialog>
      </>
    </>
  );
};

export default Profile;
