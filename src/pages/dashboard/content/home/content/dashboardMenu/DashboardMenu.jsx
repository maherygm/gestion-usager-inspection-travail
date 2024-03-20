import React, { useEffect, useState } from "react";
import "./__dashboardMenu.scss";
import ButtonStyled from "./content/ui/ButtonStyled";
import {
  AutoGraph,
  Folder,
  Info,
  NightsStay,
  People,
  Person,
  PublishedWithChanges,
} from "@mui/icons-material";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
const DashboardMenu = () => {
  useEffect(() => {
    gsap.fromTo(
      ".btn-aa-annimer",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.1,
        duration: 1,
      }
    );
  }, []);

  const [isThemeDark, setIsThemeDark] = useState(false);
  const switchMode = () => {
    if (localStorage.getItem("supermode") === "true") {
      localStorage.setItem("supermode", "false");
      document.body.classList.remove("darktheme");
      setIsThemeDark(false);
    } else {
      localStorage.setItem("supermode", "true");
      document.body.classList.add("darktheme");
      setIsThemeDark(true);
    }
  };
  const navigate = useNavigate();

  return (
    <div className="main-container-dashboard-menu">
      <p className="commencer">Commencer</p>
      <div className="section">
        <div className="revue ">
          <div className="header">
            <p className={"btn-aa-annimer"}>Overview</p>
          </div>
          <div className="element">
            <ButtonStyled
              title={"Overview"}
              icons={<AutoGraph />}
              // sx={{
              //   backgroundColor: "#00aeef",
              // }}
              color={"var(--darkFontColor)"}
              className={"btn-aa-annimer"}
              links={"/dashboard/overview"}
            />
          </div>
        </div>
        <div className="admin">
          <div className="header">
            <p className={"btn-aa-annimer"}>Administration</p>
          </div>
          <div className="element">
            <ButtonStyled
              title={"Administration des dossiers"}
              icons={<Folder />}
              // sx={{
              //   backgroundColor: "#00aeef",
              // }}
              color={"var(--darkFontColor)"}
              size={{
                width: "200%",
                height: "300%",
              }}
              className={"btn-aa-annimer"}
              links={"/dashboard/management"}
            />
            <ButtonStyled
              title={"Historiques"}
              icons={<PublishedWithChanges />}
              // sx={{
              //   backgroundColor: "#00aeef",
              // }}
              color={"var(--darkFontColor)"}
              className={"btn-aa-annimer"}
              links={"/dashboard/historiques"}
            />
            <ButtonStyled
              title={"Gestion des utilisateurs"}
              icons={<People />}
              sx={{
                // backgroundColor: "#00aeef",
                width: "194%",
              }}
              size={{
                width: "200%",
                height: "500%",
              }}
              color={"var(--darkFontColor)"}
              className={"btn-aa-annimer"}
              links={"/dashboard/admin"}
            />
          </div>
        </div>
        <div className="settings">
          <div className="header">
            <p className={"btn-aa-annimer"}>Settings</p>
          </div>
          <div className="element">
            <div onClick={() => switchMode()}>
              <ButtonStyled
                title={"Themes"}
                icons={<NightsStay />}
                // sx={{
                //   backgroundColor: "#00aeef",
                // }}
                color={"var(--darkFontColor)"}
                className={"btn-aa-annimer"}
              />
            </div>
            <ButtonStyled
              title={"Comptes utilisateurs"}
              icons={<Person />}
              // sx={{
              //   backgroundColor: "#00aeef",
              // }}
              color={"var(--darkFontColor)"}
              size={{
                width: "200%",
                height: "250%",
              }}
              className={"btn-aa-annimer"}
              links={"/dashboard/settings"}
            />
          </div>
        </div>
        <div className="abouts">
          <div className="header">
            <p className={"btn-aa-annimer"}>Abouts</p>
          </div>
          <div className="element">
            <ButtonStyled
              title={"A propos"}
              icons={<Info />}
              // sx={{
              //   backgroundColor: "#00aeef",
              // }}
              color={"var(--darkFontColor)"}
              className={"btn-aa-annimer"}
              links={"/dashboard/abouts"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
