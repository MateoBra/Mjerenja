import React from "react"
import { Document, Packer, Paragraph, HeadingLevel, AlignmentType, Table, TableRow, TableCell, WidthType } from "docx";
import { saveAs } from "file-saver";
import "./CreateWordDoc.css"


function CreatWordDoc(props) {
    const data = props.checkedData
    const [message, setMessage] = React.useState("")

    function handleChange(e) {

        setMessage(e.target.value)
    }

    function Download() {
        Packer.toBlob(doc).then(blob => {
            saveAs(blob, "example.docx");
        })
    }

    let tables = []

    data.map((x) => {
        let paragraph = []
        if (x.status === true) {
            x.details.map((i) => paragraph.push(new Paragraph({
                text: i, spacing: {
                    before: 100,
                }
            })))
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
                }))
        }
    })

const table = new Table({
    columnWidths: [3505, 5505],
    rows:
        tables,

});

const doc = new Document({
    sections: [
        {
            children: [
                new Paragraph({
                    text: "Transformatorska stanica " + message,
                    heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        after: 200,
                    }
                }),
                table
            ]
        }
    ],
});

return (
    <div className="wordDoc">
        <label>Transformatorska stanica</label>
        <br></br>
        <input placeholder="Naziv transformatorske stanice" type="text" onChange={handleChange} value={message}></input>
        <br></br>

        <button onClick={() => Download()}>Download</button>
    </div>

)
}
export default CreatWordDoc;

