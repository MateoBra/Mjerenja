import CreatWordDoc from "./CreateWordDoc";
import Measurements from "./Measurements"
import Second from "./Second";
import React from "react"

function Form() {


const[page, setPage] = React.useState(0);

const[getName, setName] = React.useState()

const[checkedData, setCheckedData] = React.useState()

const FormTitles = ["Mjerenja", "Oprema", "Download"]

const PageDisplay=() =>{
  if(page === 0){
    return <Measurements setName={setName} setPage={setPage} page={page}/>;
  }
  if(page === 1){
    return <Second getName={getName} setCheckedData={setCheckedData}/>;
  }
  if(page === 2){
    return <CreatWordDoc getName={getName}  checkedData={checkedData}/>;
  }
}
  return(
    <div className="form">
      <div className="progressbar">
      <div style={{width: page === 0? "33.3%" : page === 1? "66.6%" : "100%"}}></div>
      </div>

      <div className="form-container">
        <div className="header">
        <h1>{FormTitles[page]}</h1></div>
        
          {PageDisplay()}
        <div className="footer">
          <button hidden={page==0? "hidden":null} onClick={()=>{setPage((currPage)=>currPage - 1)}}>Nazad</button>
          <button hidden={page==0? "hidden":null}
            onClick={()=>{
              if(page===FormTitles.length-1){
                window.location.reload();
              }else{
              setPage((currPage)=>currPage + 1)}}}>{page===FormTitles.length-1? "Početna": "Dalje"}</button>
        </div>
      </div>
    </div>
  )
}

export default Form
