import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward,faEdit,faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';


function FormStd(){

const [fname,setFname]=useState();
const [lname,setLname]=useState();
const [gmail,setGmail]=useState();
const [birthDay,setBirthDay]=useState();
const [education,setEducation]=useState();
const [location,setLocation]=useState();
console.log(birthDay)
const Postapi=()=>{

  axios.post('http://localhost:8800/postdata',{fname:fname,lname:lname,gmail:gmail,location:location,birthDay:birthDay,education:education})
.then(()=>(console.log("data send succesfully")))}

    return(
          <>
        <form>
          <Link to='/'><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></Link><br></br>
  
          <label to='Table'>First Name:</label>
          <input type="text" onChange={e=>{setFname(e.target.value)}} />

          <label>Last Name:</label>
          <input type="text"  onChange={e=>{setLname(e.target.value)}} /><br></br>

          <label> Location:</label>
          <input type="text" onChange={e=>{setLocation(e.target.value)}}  /><br></br>

          <label>Gmail:</label>
          <input type="gmail" onChange={e=>{setGmail(e.target.value)}}  /><br></br>

          <label>D.O.B:</label>
          <input type="date" onChange={e=>{setBirthDay(e.target.value)}} /><br></br>

          <label>Education:</label>
          <input type="text"  onChange={e=>{setEducation(e.target.value)}}  /><br></br><br></br> <br></br>
           <textarea rows={8} cols={30}></textarea><br></br>
          
          <button type='submit' onClick={Postapi} className='formbut'>submit</button><br></br>
        </form>
        </>
    );
}
export default FormStd;