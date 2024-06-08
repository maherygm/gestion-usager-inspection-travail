import {
  Delete,
  Edit,
  FilterList,
  KeyboardArrowLeft,
  Search,
  Visibility
} from "@mui/icons-material";
import { Avatar, Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { FaFileWord } from "react-icons/fa6";
import { MdPictureAsPdf } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ColorButtonContained from "../../../../components/ui/materialUibutton/ColorButtonContained";
import ColorButtonText from "../../../../components/ui/materialUibutton/ColorButtonText";
import SimpleButtonText from "../../../../components/ui/materialUibutton/SimpleButtonText";
import Profile from "../../layout/profile/Profile";
import "./__management.scss";
import DeleteFolder from "./content/delete/DeleteFolder";
import Details from "./content/details/Details";
import DialogAddNewFolder from "./content/dialog/DialogAddFolder";

import moment from "moment";
import "moment/locale/fr";
import { FaFileExcel } from "react-icons/fa6";
import { toast } from "react-toastify";
import { exportExcel, exportPDF, exportWord } from "../../../../hooks/exportData";
import { stringAvatar } from "../../../../hooks/useColorGenerate";
import { createUsager } from "../../../../services/backend/usagerService";
import EditFolder from "./content/editFolder/EditFolder";
moment.locale("fr");

const Management = () => {
  const navigate = useNavigate();

  function navigateto(params) {
    navigate(`/dashboard/${params}`);
  }

  const dossiers = useSelector((selector) => selector.dossierReducer);

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
    dossier: {
      usager: {
        nom: "",
        prenom: "",
        adresse: "",
        sexe: "",
      },
      description: "",
      date: "",
      etats: "",
      types: "",
    },
    _id: "",
    __v: 0,
  });

  const [openAddUsager, setOpenAddUsager] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [folderDel, setfolderDel] = useState({
    dossier: {
      usager: {
        nom: "",
        prenom: "",
        adresse: "",
        sexe: "",
      },
      description: "",
      date: "",
      etats: "",
      types: "",
    },
    _id: "",
    __v: 0,
  });
  function handleClose(params) {
    setDeleteOpen(false);
  }

  const notifySuccess = (message) =>
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notifyErr = (message) =>
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const [usagerData, setUsagerData] = useState({
    usager: {
      nom: "",
      prenom: "",
      adresse: "",
      sexe: "Homme",
    },
  });

  function handleSubmitAdd(params) {
    let usagerCreated = createUsager(usagerData);

    usagerCreated
      .then((result) => {
        notifySuccess(
          "Ajout du" + result.usager.nom + " " + result.usager.prenom
        );
        handleClosemodalAddUsager();
        setUsagerData({
          usager: {
            nom: "",
            prenom: "",
            adresse: "",
            sexe: "Homme",
          },
        });
      })
      .catch((err) => notifyErr("erreur " + err));
  }

  const [folderEdit, setfolderEdit] = useState({
    dossier: {
      usager: {
        nom: "",
        prenom: "",
        adresse: "",
        sexe: "",
      },
      description: "",
      date: "",
      etats: "",
      types: "",
    },
    _id: "",
    __v: 0,
  });

  function deleteFolder(params) { }
  const [idFolder, setId] = useState(null);

  const [openEdit, setOpenEdit] = useState(false);
  function handleCloseEdit(params) {
    setOpenEdit(false);
  }


  function handleExportToExcel() {
    exportExcel(dossiers);

  }
  function handleExportToPdf() {
    exportPDF(dossiers);

  }
  function handleExportToWord() {
    exportWord(dossiers);

  }

  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState(false);
  const handleSearchChange = (event) => {
    setSearch(true);
    setSearchTerm(event.target.value);
  };
  const filteredDossiers = dossiers.filter(el =>
    el.dossier.usager.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    el.dossier.usager.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    el.dossier.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-container-management">
      <>
        <Profile />
        <DeleteFolder
          open={deleteOpen}
          handleClose={handleClose}
          deleteFolder={deleteFolder}
          idFolder={idFolder}
        />
        <Details
          open={openDetails}
          handleClose={handleCloseDetails}
          details={details}
        />
        <EditFolder
          open={openEdit}
          dossier={folderEdit}
          handleClose={handleCloseEdit}
        />
      </>
      <div className={`add-add-usager ${openAddUsager ? "open" : ""}`}>
        <div className="dark" onClick={() => handleClosemodalAddUsager()}></div>
        <div className="component">
          <div className="header">
            <h2>Ajouter Un Nouveau Usager</h2>

            <div className="body-add-usager">
              <form action="">
                <div className="nom">
                  <label htmlFor="">Nom </label>
                  <input
                    value={usagerData.usager.nom}
                    onChange={(e) =>
                      setUsagerData({
                        usager: {
                          ...usagerData.usager,
                          nom: e.target.value,
                        },
                      })
                    }
                    placeholder="nom"
                  />
                </div>
                <div className="prenom">
                  <label htmlFor="">Prenom </label>
                  <input
                    value={usagerData.usager.prenom}
                    placeholder="prenom"
                    onChange={(e) =>
                      setUsagerData({
                        usager: {
                          ...usagerData.usager,
                          prenom: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="adresse">
                  <label htmlFor="">Adresse </label>
                  <input
                    value={usagerData.usager.adresse}
                    placeholder="adresse"
                    onChange={(e) =>
                      setUsagerData({
                        usager: {
                          ...usagerData.usager,
                          adresse: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="select-group">
                  <div className="sexe">
                    <label htmlFor="">Sexe </label>
                    <select
                      onChange={(e) =>
                        setUsagerData({
                          usager: {
                            ...usagerData.usager,
                            sexe: e.target.value,
                          },
                        })
                      }
                      value={usagerData.usager.sexe}
                    >
                      <option value="Homme">Homme</option>
                      <option value="Femme">Femme</option>
                    </select>
                  </div>
                </div>

                <div className="action-container">
                  <SimpleButtonText onClick={() => handleSubmitAdd()}>
                    Confirmer
                  </SimpleButtonText>
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
            <div className="btn-export">
              <ColorButtonText className="btn" onClick={() =>
                handleExportToPdf()
              }>
                <MdPictureAsPdf className="pdf" />
                <p> Exporter Pdf</p>
              </ColorButtonText>
              <ColorButtonText className="btn" onClick={() => handleExportToExcel()}>
                <FaFileExcel className="excel" />
                <p> Exporter Excel</p>
              </ColorButtonText>
              <ColorButtonText className="btn" onClick={() => handleExportToWord()}>
                <FaFileWord className="word" />
                <p> Exporter Word</p>
              </ColorButtonText>
            </div>
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
            <input type="text" onChange={handleSearchChange} placeholder="recherche" />
            <ColorButtonContained >
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
                  <th>etats</th>
                  <th className="dates" style={{ width: "max-content" }}>
                    dates
                  </th>
                  <th className="action">action</th>
                </tr>
              </thead>
              <tbody className="body-list">
                {(search ? [...filteredDossiers] : [...dossiers]).reverse().map((el, index) => (
                  <tr key={index}>
                    <td onClick={() => handleOpenDetails(el)}>
                      {
                        <Avatar
                          {...stringAvatar(
                            el.dossier.usager.nom +
                            " " +
                            el.dossier.usager.prenom
                          )}
                        />
                      }
                      <div>
                        {el.dossier.usager.nom + " " + el.dossier.usager.prenom}
                      </div>
                    </td>
                    <td onClick={() => handleOpenDetails(el)}>
                      {(() => {
                        switch (el.dossier.types) {
                          case "differend":
                            return (
                              <Button color="warning">
                                <p style={{ minWidth: "100px" }}>
                                  {el.dossier.types}
                                </p>
                              </Button>
                            );
                          case "reglement interieur":
                            return (
                              <Button color="info">
                                <p style={{ minWidth: "100px" }}>
                                  {el.dossier.types}
                                </p>
                              </Button>
                            );
                          case "contrat de travail":
                            return (
                              <Button color="success">
                                <p style={{ minWidth: "100px" }}>
                                  {el.dossier.types}
                                </p>
                              </Button>
                            );
                          default:
                            return <p>{el.dossier.types}</p>;
                        }
                      })()}
                    </td>

                    <td
                      style={{
                        maxWidth: "600px",
                      }}
                      onClick={() => handleOpenDetails(el)}
                    >
                      {el.dossier.description.substring(0, 100)}
                    </td>
                    <td>
                      {(() => {
                        switch (el.dossier.etats) {
                          case "en cours":
                            return (
                              <Button color="info">
                                <p style={{ minWidth: "100px" }}>
                                  {el.dossier.etats}
                                </p>
                              </Button>
                            );
                          case "traite":
                            return (
                              <Button color="success">
                                <p style={{ minWidth: "100px" }}>
                                  {el.dossier.etats}
                                </p>
                              </Button>
                            );
                          case "refuser":
                            return (
                              <Button color="error">
                                <p style={{ minWidth: "100px" }}>
                                  {el.dossier.etats}
                                </p>
                              </Button>
                            );
                          default:
                            return <p>{el.dossier.etats}</p>;
                        }
                      })()}
                    </td>
                    <td
                      onClick={() => handleOpenDetails(el)}
                      className="dates"
                      style={{ width: "max-content" }}
                    >
                      {moment.utc(el.dossier.date).format("lll")}
                    </td>
                    <td>
                      <IconButton
                        onClick={() => handleOpenDetails(el)}
                        className="icons"
                      >
                        <Visibility />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          setfolderEdit(el);
                          setOpenEdit(true);
                        }}
                        className="icons"
                      >
                        <Edit color="secondary" />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          setDeleteOpen(true);
                          setId(el._id);
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
