import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import htmlDocx from "html-docx-js/dist/html-docx";
import { saveAs } from "file-saver";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

export const exportPDF = (dataList) => {
  const doc = new jsPDF();

  const tableColumn = [
    "Nom",
    "Prénom",
    "Adresse",
    "Sexe",
    "Description",
    "Date",
    "État",
    "Type",
  ];
  const tableRows = [];

  dataList.forEach((data) => {
    const rowData = [
      data.dossier.usager.nom,
      data.dossier.usager.prenom,
      data.dossier.usager.adresse,
      data.dossier.usager.sexe,
      data.dossier.description,
      moment.utc(data.dossier.date).format("lll"),
      data.dossier.etats,
      data.dossier.types,
    ];
    tableRows.push(rowData);
  });

  autoTable(doc, { head: [tableColumn], body: tableRows });
  doc.save("dossiers.pdf");
};

export const exportExcel = (dataList) => {
  const jsonData = dataList.map((data) => ({
    Nom: data.dossier.usager.nom,
    Prénom: data.dossier.usager.prenom,
    Adresse: data.dossier.usager.adresse,
    Sexe: data.dossier.usager.sexe,
    Description: data.dossier.description,
    Date: moment.utc(data.dossier.date).format("lll"),
    État: data.dossier.etats,
    Type: data.dossier.types,
  }));

  const worksheet = XLSX.utils.json_to_sheet(jsonData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Dossiers");
  XLSX.writeFile(workbook, "dossiers.xlsx");
};

export const exportWord = (dataList) => {
  let htmlContent = `<table border="1">
    <tr><th>Nom</th><th>Prénom</th><th>Adresse</th><th>Sexe</th><th>Description</th><th>Date</th><th>État</th><th>Type</th></tr>`;

  dataList.forEach((data) => {
    htmlContent += `<tr>
      <td>${data.dossier.usager.nom}</td>
      <td>${data.dossier.usager.prenom}</td>
      <td>${data.dossier.usager.adresse}</td>
      <td>${data.dossier.usager.sexe}</td>
      <td>${data.dossier.description}</td>
      <td>${moment.utc(data.dossier.date).format("lll")}</td>
      <td>${data.dossier.etats}</td>
      <td>${data.dossier.types}</td>
    </tr>`;
  });

  htmlContent += `</table>`;
  const docx = htmlDocx.asBlob(htmlContent);
  saveAs(docx, "dossiers.docx");
};
