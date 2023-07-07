import React from "react";
import {
  Document,
  Packer,
  Paragraph,
  HeadingLevel,
  AlignmentType,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from "docx";
import { saveAs } from "file-saver";
import "./CreateWordDoc.css";
import Biblioteka from "./Files/Biblioteka tehničkih karakteristika.docx";
import Radovi from "./Files/Radovi za ormar zaštite i upravljanja vodno polje 110kV.docx";
import Usluge from "./Files/Usluge ispitivanja ormara zaštite i upravljanja vodno polje 110kV.docx";
import Troskovnik from "./Files/Tipski troškovnik.xlsx";

function CreatWordDoc(props) {
  const data = props.checkedData;
  const [message, setMessage] = React.useState("");

  function handleChange(e) {
    setMessage(e.target.value);
  }

  function Download() {
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "example.docx");
    });
  }

  let tables = [];

  data.map((x) => {
    let paragraph = [];
    if (x.status === true) {
      x.details.map((i) =>
        paragraph.push(
          new Paragraph({
            text: i,
            spacing: {
              before: 100,
            },
          })
        )
      );
      tables.push(
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 3505,
                type: WidthType.DXA,
              },
              children: [new Paragraph(x.name)],
            }),
            new TableCell({
              width: {
                size: 700,
                type: WidthType.DXA,
              },
              children: [new Paragraph("x" + x.numb)],
            }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: paragraph,
            }),
          ],
        })
      );
    }
  });

  const table = new Table({
    columnWidths: [3505, 5505],
    rows: tables,
  });

  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            text: "Naziv " + message,
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: {
              after: 200,
            },
          }),
          table,
        ],
      },
    ],
  });

  return (
    <div className="wordDoc">
      <div className="downloadButtons">
        <label>Radovi za ormar zaštite i upravljanja vodno polje 110kV</label>
        <a
          href={Radovi}
          download="Radovi za ormar zaštite i upravljanja vodno polje 110kV"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Download</button>
        </a>
      </div>
      <div className="downloadButtons">
        <label>Biblioteka tehničkih karakteristika </label>
        <a
          href={Biblioteka}
          download="Biblioteka tehničkih karakteristika"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Download</button>
        </a>
      </div>
      <div className="downloadButtons">
        <label>
          Usluge ispitivanja ormara zaštite i upravljanja vodno polje 110kV
        </label>
        <a
          href={Usluge}
          download="Usluge ispitivanja ormara zaštite i upravljanja vodno polje 110kV"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Download</button>
        </a>
      </div>
      <div className="downloadButtons">
        <label>Tipski troškovnik</label>
        <a
          href={Troskovnik}
          download="Tipski troškovnik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Download</button>
        </a>
      </div>
      <br></br>
      <br></br>
      <label>Naziv dokumenta</label>
      <br></br>
      <input
        placeholder="Unesite naziv dokumenta"
        type="text"
        onChange={handleChange}
        value={message}
      ></input>
      <br></br>
      <div className="fileDownloadButton">
        <button onClick={() => Download()}>Download</button>
      </div>
    </div>
  );
}
export default CreatWordDoc;
