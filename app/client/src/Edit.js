
 import { useState,useEffect } from "react";
 import axios from "axios";
import {useNavigate,} from "react-router-dom";

 function Edit(){
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [location,setLocation]=useState("");
    const [birthDay,setBirthDay]=useState("");
    const [education,setEducation]=useState("");
    const [id,setId]=useState(0);
    const [gmail,setGmail]=useState("");
    const navigate=useNavigate();
    const [n,setN]=useState(false)
    useEffect(()=>{
        setFname(localStorage.getItem('fname'));
        setLname(localStorage.getItem('lname'));
        setGmail(localStorage.getItem('gmail'));
        setLocation(localStorage.getItem('location'));
        setEducation(localStorage.getItem('education'));
        setBirthDay(localStorage.getItem('birthday'));  
        setId(localStorage.getItem('id'));
    },[]);
    // edite api caslling
    const updateapi= async()=>{
        try{
            await axios.put(`http://localhost:8800/updatedata/${id}/${fname}/${lname}/${location}/${gmail}/${birthDay}/${education}`)
            navigate("/") }
        catch(err){
            console.log(err)
        }}
    return(
        <div className="edit">
        <div className="form">
        <label>FIRST NAME</label>
        <input type="text" value={fname} onChange={(e)=>setFname(e.target.value )}></input>
        <label>LAST NAME</label>
        <input type="text" value={lname}   onChange={(e)=>setLname(e.target.value )}></input>
        <label>LOCATION</label>
        <input type="text" value={location} onChange={(e)=>setLocation(e.target.value )}></input>
        <label>GMAIL</label>
        <input type="gmail" value={gmail} onChange={(e)=>setGmail(e.target.value )}></input>
        <label>EDUCATION</label>
        <input type="text" value={education} onChange={(e)=>setEducation(e.target.value )}></input>
        <label>D.O.B</label>
        <input type="date" value={birthDay} onChange={(e)=>setBirthDay(e.target.value )}></input>
         <button className="editsubmit" onClick={updateapi} >submit</button> 
        </div>
        </div>
    )
}
export default Edit;