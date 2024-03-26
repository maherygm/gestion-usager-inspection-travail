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
import Details from "./content/details/Details";
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
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nesciunt necessitatibus molestias nam totam illo, ducimus laudantium eveniet ad numquam exercitationem quos quas itaque libero ut esse eaque doloribus est nihil quo et quidem delectus! Ratione accusamus ea itaque culpa excepturi cupiditate, inventore nesciunt odit quaerat reiciendis voluptate maiores exercitationem maxime porro blanditiis id eum optio ",
    },
    {
      usageName: "Ives Rakoto",
      type: "differend",
      dates: "13 octoble 2023",
      desc: "     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nesciunt necessitatibus molestias nam totam illo, ducimus laudantium eveniet ad numquam exercitationem quos quas itaque libero ut esse eaque doloribus est nihil quo et quidem delectus! Ratione accusamus ea itaque culpa excepturi cupiditate, inventore nesciunt odit quaerat reiciendis voluptate maiores exercitationem maxime porro blanditiis id eum optio ",
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
      desc: "     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nesciunt necessitatibus molestias nam totam illo, ducimus laudantium eveniet ad numquam exercitationem quos quas itaque libero ut esse eaque doloribus est nihil quo et quidem delectus! Ratione accusamus ea itaque culpa excepturi cupiditate, inventore nesciunt odit quaerat reiciendis voluptate maiores exercitationem maxime porro blanditiis id eum optio ",
    },
    {
      usageName: "Razefason luis jean de duei",
      type: "differend",
      dates: "13 octoble 2023",
      desc: "     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nesciunt necessitatibus molestias nam totam illo, ducimus laudantium eveniet ad numquam exercitationem quos quas itaque libero ut esse eaque doloribus est nihil quo et quidem delectus! Ratione accusamus ea itaque culpa excepturi cupiditate, inventore nesciunt odit quaerat reiciendis voluptate maiores exercitationem maxime porro blanditiis id eum optio ",
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
      desc: "     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nesciunt necessitatibus molestias nam totam illo, ducimus laudantium eveniet ad numquam exercitationem quos quas itaque libero ut esse eaque doloribus est nihil quo et quidem delectus! Ratione accusamus ea itaque culpa excepturi cupiditate, inventore nesciunt odit quaerat reiciendis voluptate maiores exercitationem maxime porro blanditiis id eum optio ",
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
      desc: "     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nesciunt necessitatibus molestias nam totam illo, ducimus laudantium eveniet ad numquam exercitationem quos quas itaque libero ut esse eaque doloribus est nihil quo et quidem delectus! Ratione accusamus ea itaque culpa excepturi cupiditate, inventore nesciunt odit quaerat reiciendis voluptate maiores exercitationem maxime porro blanditiis id eum optio ",
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
  const [openDetails, setOpenDetails] = useState(false);
  function handleCloseDetails(params) {
    setOpenDetails(false);
  }
  function handleOpenDetails(params) {
    setOpenDetails(true);
    setdetails(params);
  }
  const [details, setdetails] = useState({
    usageName: "Rakotomalala jean Mahery",
    type: "differend",
    dates: "13 octoble 2023",
    desc: "Lorem ipsum dolor sit amet.",
  });

  const [openAddUsager, setOpenAddUsager] = useState(false);
  return (
    <div className="main-container-management">
      <Profile />
      <Details
        open={openDetails}
        handleClose={handleCloseDetails}
        details={details}
      />
      <div className={`add-add-usager ${openAddUsager ? "open" : ""}`}>
        <div className="dark" onClick={() => handleClosemodalAddUsager()}></div>
        <div className="component">
          <div className="header">
            <h2>Ajouter Un Nouveau Usager</h2>

            <div className="body-add-usager">
              <form action="">
                <div className="nom">
                  <label htmlFor="">Nom </label>
                  <input placeholder="nom" />
                </div>
                <div className="prenom">
                  <label htmlFor="">Prenom </label>
                  <input placeholder="prenom" />
                </div>
                <div className="adresse">
                  <label htmlFor="">Adresse </label>
                  <input placeholder="adresse" />
                </div>
                <div className="select-group">
                  <div className="sexe">
                    <label htmlFor="">Sexe </label>
                    <select>
                      <option value="Homme">Homme</option>
                      <option value="Femme">Femme</option>
                    </select>
                  </div>
                </div>

                <div className="action-container">
                  <SimpleButtonText>Confirmer</SimpleButtonText>
                  <SimpleButtonText onClick={() => handleClosemodalAddUsager()}>
                    Annuler
                  </SimpleButtonText>
                </div>
              </form>
            </div>
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
                    <td onClick={() => handleOpenDetails(el)}>
                      {<Avatar className="div">{el.usageName[0]}</Avatar>}
                      <div>{el.usageName}</div>
                    </td>
                    <td onClick={() => handleOpenDetails(el)}>
                      <SimpleButtonText>{el.type}</SimpleButtonText>
                    </td>
                    <td onClick={() => handleOpenDetails(el)}>{el.dates}</td>
                    <td onClick={() => handleOpenDetails(el)}>{el.desc}</td>
                    <td>
                      <IconButton
                        onClick={() => handleOpenDetails(el)}
                        className="icons"
                      >
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
