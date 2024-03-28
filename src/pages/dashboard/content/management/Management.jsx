import React, { useState } from "react";
import "./__management.scss";
import Profile from "../../layout/profile/Profile";
import ColorButtonText from "../../../../components/ui/materialUibutton/ColorButtonText";
import ColorButtonContained from "../../../../components/ui/materialUibutton/ColorButtonContained";
import {
  Delete,
  Edit,
  FilterList,
  KeyboardArrowLeft,
  Search,
  Visibility,
} from "@mui/icons-material";
import { Avatar, Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SimpleButtonText from "../../../../components/ui/materialUibutton/SimpleButtonText";
import DialogAddNewFolder from "./content/dialog/DialogAddFolder";
import Details from "./content/details/Details";
import DeleteFolder from "./content/delete/DeleteFolder";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0].toUpperCase()}${name
      .split(" ")[1][0]
      .toUpperCase()}`,
  };
}
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
      type: "reglement interieur",
      dates: "13 octoble 2023",
      desc: "     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nesciunt necessitatibus molestias nam totam illo, ducimus laudantium eveniet ad numquam exercitationem quos quas itaque libero ut esse eaque doloribus est nihil quo et quidem delectus! Ratione accusamus ea itaque culpa excepturi cupiditate, inventore nesciunt odit quaerat reiciendis voluptate maiores exercitationem maxime porro blanditiis id eum optio ",
    },
    {
      usageName: "Randria naharitra",
      type: "contrat de travail",
      dates: "13 octoble 2023",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      usageName: "Razefason duei",
      type: "differend",
      dates: "13 octoble 2023",
      desc: "     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nesciunt necessitatibus molestias nam totam illo, ducimus laudantium eveniet ad numquam exercitationem quos quas itaque libero ut esse eaque doloribus est nihil quo et quidem delectus! Ratione accusamus ea itaque culpa excepturi cupiditate, inventore nesciunt odit quaerat reiciendis voluptate maiores exercitationem maxime porro blanditiis id eum optio ",
    },
    {
      usageName: "Cristie de duei",
      type: "reglement interieur",
      dates: "13 octoble 2023",
      desc: "     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nesciunt necessitatibus molestias nam totam illo, ducimus laudantium eveniet ad numquam exercitationem quos quas itaque libero ut esse eaque doloribus est nihil quo et quidem delectus! Ratione accusamus ea itaque culpa excepturi cupiditate, inventore nesciunt odit quaerat reiciendis voluptate maiores exercitationem maxime porro blanditiis id eum optio ",
    },
    {
      usageName: "armin luis jean de duei",
      type: "differend",
      dates: "13 octoble 2023",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      usageName: "Razefas luis jean de duei",
      type: "differend",
      dates: "13 octoble 2023",
      desc: "     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nesciunt necessitatibus molestias nam totam illo, ducimus laudantium eveniet ad numquam exercitationem quos quas itaque libero ut esse eaque doloribus est nihil quo et quidem delectus! Ratione accusamus ea itaque culpa excepturi cupiditate, inventore nesciunt odit quaerat reiciendis voluptate maiores exercitationem maxime porro blanditiis id eum optio ",
    },
    {
      usageName: "Razefason luis jean de duei",
      type: "contrat de travail",
      dates: "13 octoble 2023",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      usageName: "jean de duei",
      type: "reglement interieur",
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

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [folderDel, setfolderDel] = useState({
    usageName: "Rakotomalala jean Mahery",
    type: "differend",
    dates: "13 octoble 2023",
    desc: "Lorem ipsum dolor sit amet.",
  });
  function handleClose(params) {
    setDeleteOpen(false);
  }
  function deleteFolder(params) {}

  return (
    <div className="main-container-management">
      <Profile />
      <DeleteFolder
        open={deleteOpen}
        handleClose={handleClose}
        deleteFolder={deleteFolder}
      />
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
                  <th className="description">description</th>
                  <th className="dates" style={{ width: "max-content" }}>
                    dates
                  </th>
                  <th className="action">action</th>
                </tr>
              </thead>
              <tbody className="body-list">
                {data.map((el, index) => (
                  <tr key={index}>
                    <td onClick={() => handleOpenDetails(el)}>
                      {<Avatar {...stringAvatar(el.usageName)} />}
                      <div>{el.usageName}</div>
                    </td>
                    <td onClick={() => handleOpenDetails(el)}>
                      {(() => {
                        switch (el.type) {
                          case "differend":
                            return (
                              <Button color="warning">
                                <p style={{ minWidth: "100px" }}>{el.type}</p>
                              </Button>
                            );
                          case "reglement interieur":
                            return (
                              <Button color="info">
                                <p style={{ minWidth: "100px" }}>{el.type}</p>
                              </Button>
                            );
                          case "contrat de travail":
                            return (
                              <Button color="success">
                                <p style={{ minWidth: "100px" }}>{el.type}</p>
                              </Button>
                            );
                          default:
                            return <p>{el.type}</p>;
                        }
                      })()}
                    </td>

                    <td
                      style={{
                        maxWidth: "600px",
                      }}
                      onClick={() => handleOpenDetails(el)}
                    >
                      {el.desc.substring(0, 100)}
                    </td>
                    <td
                      onClick={() => handleOpenDetails(el)}
                      className="dates"
                      style={{ width: "max-content" }}
                    >
                      {el.dates}
                    </td>
                    <td>
                      <IconButton
                        onClick={() => handleOpenDetails(el)}
                        className="icons"
                      >
                        <Visibility />
                      </IconButton>
                      <IconButton onClick={() => {}} className="icons">
                        <Edit color="secondary" />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          setDeleteOpen(true);
                          deleteFolder(el);
                        }}
                        className="icons"
                      >
                        <Delete color="error" />
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
