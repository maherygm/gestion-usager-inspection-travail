import React, { useState } from "react";
import "./__management.scss";
import Profile from "../../layout/profile/Profile";
import ColorButtonText from "../../../../components/ui/materialUibutton/ColorButtonText";
import ColorButtonContained from "../../../../components/ui/materialUibutton/ColorButtonContained";
import {
  Delete,
  FilterList,
  KeyboardArrowLeft,
  Search,
  Visibility,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SimpleButtonText from "../../../../components/ui/materialUibutton/SimpleButtonText";
import DialogAddNewFolder from "./content/dialog/DialogAddFolder";
const Management = () => {
  const navigate = useNavigate();

  function navigateto(params) {
    navigate(`/dashboard/${params}`);
  }

  const data = [
    {
      usageName: "Rakotomalala jean Mahery",
      type: "differend",
      dates: "13 octoble 2023",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      usageName: "Ives Rakoto",
      type: "differend",
      dates: "13 octoble 2023",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      usageName: "Randria naharitra",
      type: "differend",
      dates: "13 octoble 2023",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      usageName: "Razefason luis jean de duei",
      type: "differend",
      dates: "13 octoble 2023",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      usageName: "Razefason luis jean de duei",
      type: "differend",
      dates: "13 octoble 2023",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      usageName: "Razefason luis jean de duei",
      type: "differend",
      dates: "13 octoble 2023",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      usageName: "Razefason luis jean de duei",
      type: "differend",
      dates: "13 octoble 2023",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      usageName: "Razefason luis jean de duei",
      type: "differend",
      dates: "13 octoble 2023",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      usageName: "Razefason luis jean de duei",
      type: "differend",
      dates: "13 octoble 2023",
      desc: "Lorem ipsum dolor sit amet.",
    },
  ];

  const [openAdd, setopenAdd] = useState(false);

  function handleCloseAdd(params) {
    setopenAdd(false);
  }
  function handleOpenmodalAddUsager(params) {
    setOpenAddUsager(true);
  }
  function handleClosemodalAddUsager(params) {
    setOpenAddUsager(false);
  }

  const [openAddUsager, setOpenAddUsager] = useState(false);
  return (
    <div className="main-container-management">
      <Profile />
      <div className={`add-add-usager ${openAddUsager ? "open" : ""}`}>
        <div className="dark" onClick={() => handleClosemodalAddUsager()}></div>
        <div className="component">
          <div className="header">
            <h2>Ajouter Un Nouveau Usager</h2>
          </div>
        </div>
      </div>

      <div className="main-section-management">
        <div className="add-container">
          <h3>
            <IconButton className="icons" onClick={() => navigateto("home")}>
              <KeyboardArrowLeft fontSize="large" />
            </IconButton>
            Retour
          </h3>
          <div className="add-action">
            <h1>Administration Des dossiers</h1>
            <div className="button-container">
              <ColorButtonText onClick={() => setopenAdd(true)}>
                Nouveau dossier
              </ColorButtonText>
              <DialogAddNewFolder open={openAdd} handleClose={handleCloseAdd} />
              <ColorButtonContained onClick={() => handleOpenmodalAddUsager()}>
                Nouvelles Usager
              </ColorButtonContained>
            </div>
          </div>
        </div>

        <div className="search-container">
          <h2>Listes des dossiers</h2>
          <div className="search">
            <input type="text" placeholder="recherche" />
            <ColorButtonContained>
              <Search />
            </ColorButtonContained>
            <ColorButtonContained>
              <FilterList />
            </ColorButtonContained>
          </div>
        </div>

        <div className="list-dossier-container">
          <div className="list-ctn">
            <table>
              <thead className="head-list">
                <tr>
                  <th className="nom-prenom">Usager concerner</th>
                  <th className="types">types</th>
                  <th className="dates">dates</th>
                  <th className="description">description</th>
                  <th className="action">action</th>
                </tr>
              </thead>
              <tbody className="body-list">
                {data.map((el, index) => (
                  <tr key={index}>
                    <td>
                      {<Avatar className="div">{el.usageName[0]}</Avatar>}
                      <div>{el.usageName}</div>
                    </td>
                    <td>
                      <SimpleButtonText>{el.type}</SimpleButtonText>
                    </td>
                    <td>{el.dates}</td>
                    <td>{el.desc}</td>
                    <td>
                      <IconButton onClick={() => {}} className="icons">
                        <Visibility />
                      </IconButton>
                      <IconButton className="icons">
                        <Delete />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
