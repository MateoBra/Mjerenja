import React from "react"
import "./Measurements.css"
function Measurements({ setName, setPage }) {

    const data = [

        "Tehničke specifikacije opreme ormara mjerenja"

    ]

    return (
        <div className="measurements">
            <ul>
                {data.map(x =>

                    <li key={x} onClick={() => { setName(x); setPage((currPage) => currPage + 1) }}>{x}</li>)}
            </ul>

        </div>
    )
}
export default Measurements;
