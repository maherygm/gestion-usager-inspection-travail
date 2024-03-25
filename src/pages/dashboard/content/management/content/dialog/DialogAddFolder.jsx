import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Modal,
} from "@mui/material";
import SimpleButtonText from "../../../../../../components/ui/materialUibutton/SimpleButtonText";
import ColorButtonContained from "../../../../../../components/ui/materialUibutton/ColorButtonContained";
import "./__dialogAddFolder.scss";
import { Search } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
const DialogAddNewFolder = ({ open, handleClose }) => {
  const [usagers, setusagers] = useState([]);

  const [usgVal, setusgVal] = useState({
    usager: {
      nom: "",
      prenom: "",
      adresse: "",
      sexe: "",
    },
  });

  function handleClickUsager(params) {
    const usCopy = usagers.filter((usg) => usg._id === params);

    setusgVal(usCopy[0]);
  }

  function getusagers(params) {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/api/usager",
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setusagers([...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getusagers();
  }, [open]);

  return (
    <div>
      <Modal
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div
          className={`main-bloc-add`}
          style={{
            display: `${open ? "flex" : "none"}`,
          }}
        >
          <div className="dialog-header">
            <h1>Nouveu dossier</h1>
          </div>
          <div className="dialog-body">
            <div className="usage-list-container">
              <div className="search-container">
                <h3>List Usager</h3>
                <div className="action">
                  <input type="text" placeholder="Recherche" />
                  <SimpleButtonText>
                    <Search />
                  </SimpleButtonText>
                </div>
              </div>
              <div className="container-table">
                <table>
                  <thead>
                    <tr>
                      <th>Nom</th>
                      <th>Prenom</th>
                      <th>Adresse</th>
                      <th>Sexe</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usagers.map((usg) => (
                      <tr
                        key={usg._id}
                        onClick={() => handleClickUsager(usg._id)}
                      >
                        <td>{usg.usager.nom}</td>
                        <td>{usg.usager.prenom}</td>
                        <td>{usg.usager.adresse}</td>
                        <td>{usg.usager.sexe}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="form-container">
              <form action="">
                <div className="nom">
                  <label htmlFor="">Nom </label>
                  <input value={usgVal.usager.nom} placeholder="nom" />
                </div>
                <div className="prenom">
                  <label htmlFor="">Prenom </label>
                  <input value={usgVal.usager.prenom} placeholder="prenom" />
                </div>
                <div className="adresse">
                  <label htmlFor="">Adresse </label>
                  <input value={usgVal.usager.adresse} placeholder="adresse" />
                </div>
                <div className="select-group">
                  <div className="sexe">
                    <label htmlFor="">Sexe </label>
                    <select value={usgVal.usager.sexe}>
                      <option value="Homme">Homme</option>
                      <option value="Femme">Femme</option>
                    </select>
                  </div>
                  <div className="types">
                    <label htmlFor="">Types </label>
                    <select type="text" name="types">
                      <option value="Differend">Differend</option>
                      <option value="COntrat de Travail">
                        Contrat de travail
                      </option>
                      <option value="Reglement Interieur">
                        Reglement Interieur
                      </option>
                    </select>
                  </div>
                </div>
                <div className="description">
                  <label htmlFor="">Description</label>
                  <textarea placeholder="Description" />
                </div>
              </form>
            </div>
          </div>
          <div className="dialog-footer">
            <SimpleButtonText onClick={handleClose}>annuler</SimpleButtonText>
            <ColorButtonContained>confirmer</ColorButtonContained>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DialogAddNewFolder;
