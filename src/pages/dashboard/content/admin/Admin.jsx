import React, { useEffect, useState } from "react";
import "./__admin.scss";
import { Button, IconButton } from "@mui/material";
import { Add, ArrowLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Profile from "../../layout/profile/Profile";
import { useSelector } from "react-redux";
import { selector } from "gsap";
import CardUser from "./content/cardUser/CardUser";
import AddUser from "./content/addUser/AddUser";
const Admin = () => {
  const navigate = useNavigate();
  function handleNavigate(params) {
    navigate("/dashboard/home");
  }

  const users = useSelector((selector) => selector.userReducer);

  const [openAddUSer, setOpenAddUser] = useState(false);
  function handleClose(params) {
    setOpenAddUser(false);
  }
  return (
    <>
      <AddUser open={openAddUSer} handleClose={handleClose} />
      <div className="main-admin-container">
        <div className="body-admin">
          <div className="header">
            <div className="action-container">
              <div className="back-btn" onClick={() => handleNavigate()}>
                <IconButton>
                  <ArrowLeft />
                </IconButton>
                <p>Retour</p>
              </div>
              <Profile />
            </div>
            <h1>Gestion des Utilisateurs</h1>
            <div className="section-one">
              <div className="header-section">
                <h3>Listes des Utilisateurs</h3>
                <Button
                  onClick={() => setOpenAddUser(true)}
                  className="btn"
                  variant="outlined"
                  color="secondary"
                >
                  <Add />
                  <p>Nouveau Utilisateur</p>
                </Button>
              </div>
              <div className="body-section">
                <div className="el">
                  {users.map((user, key) => (
                    <>
                      <div key={key}>
                        <CardUser user={user} />
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
