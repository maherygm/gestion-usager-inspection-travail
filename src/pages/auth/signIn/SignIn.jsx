import { ArrowBack, Lock, Person } from "@mui/icons-material";
import "bulma/css/bulma.min.css";
import Lottie from "lottie-react";
import React, { useEffect, useRef, useState } from "react";
import groovyWalkAnimation from "../../../assets/lotties/walk.json";
import "./__signIn.scss";

import { IconButton } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ButtonAnnimate from "../../../components/ui/button/ButtonAnnimate";
import { authentification } from "../../../services/backend/utilisateurService";

const SignIn = () => {
  const lotieRef = useRef();

  useEffect(() => {
    lotieRef.current.pause();
  });

  const navigate = useNavigate();

  function navigateTo(params) {
    navigate("/dashboard/home");
  }

  const [emails, setEmails] = useState("");
  const [mdp, setMdp] = useState("");

  function handleSumbit(params) {
    const result = authentification(emails, mdp);

    result.then((res) => {
      if (res.valide) {
        notifySuccess();
        setTimeout(() => navigateTo(), 5000);
      } else {
        notifyErr();
      }
    });
  }

  const notifySuccess = () =>
    toast.success("Connection Reussis", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notifyErr = () =>
    toast.error("Erreur d'authentification", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  return (
    <div className="sign-in-main-container">
      {/* <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition="Bounce"
      /> */}

      <div className="back-btn">
        <NavLink className="nav-link" to={"/"}>
          <IconButton className="icons-btn">
            <ArrowBack />
          </IconButton>
          <p>Revenir en Arriere</p>
        </NavLink>
      </div>
      <div className="section-sign-in-pages">
        <div className="section section-1">
          <form>
            <p>INSPECTION DE |TRAVAIL</p>
            <h2>
              Beaucoup de Personne <br /> Nous avait deja fait confiance
            </h2>
            <p>
              Veuillez entrez les information de connection
            </p>

            <div className="field ">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input is-medium"
                  type="texte"
                  placeholder="Entrez Votre Emails"
                  onBlur={() => lotieRef.current.pause()}
                  onChange={(e) => {
                    lotieRef.current.play();
                    setEmails(e.target.value);
                  }}
                  onKeyUp={() =>
                    setTimeout(() => {
                      lotieRef.current.pause();
                    }, 2000)
                  }
                  value={emails}
                />
                <span className="icon is-small is-left">
                  <Person />
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input  is-medium"
                  type="password"
                  placeholder="mots de passe"
                  onBlur={() => lotieRef.current.pause()}
                  onChange={(e) => {
                    lotieRef.current.play();
                    setMdp(e.target.value);
                  }}
                  onKeyUp={() =>
                    setTimeout(() => {
                      lotieRef.current.pause();
                    }, 5000)
                  }
                  value={mdp}
                />
                <span className="icon is-small is-left">
                  <Lock />
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div
              className="btn-container"
              onMouseEnter={() => lotieRef.current.play()}
              onMouseLeave={() => lotieRef.current.pause()}
            >
              <ButtonAnnimate onClick={handleSumbit} title={"Connection"} />
            </div>
            <div className="fotter-sign">
              <p> Pas de compte ? </p>
              <NavLink to={"/sign/signup"}>
                <p> Inscriver vous ici</p>
              </NavLink>
            </div>
          </form>
        </div>
        <div className="section section-2">
          <div className="lottie-container">
            <Lottie
              lottieRef={lotieRef}
              animationData={groovyWalkAnimation}
              autoPlay={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
