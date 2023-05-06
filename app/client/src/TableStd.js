import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch,faTrash,faEdit} from "@fortawesome/free-solid-svg-icons";
import {useState,useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
function TableStd(){
    const [list,setList]=useState([]);
    const[searchval,setSearchval]=useState("");

    // get all data from student table using useEffect method  
    useEffect(()=>{
        axios.get('http://localhost:8800/getdata')
       .then((geted)=>{setList(geted.data);
        console.log(list);
        })},[])  
const deleteapi=(e)=>{
    const id=e.id;
  if (window.confirm("do you really want to delete the row")){
    axios.post('http://localhost:8800/deletedata',{id:id})
    window.location.reload()
  }   
}
//local storage setup
const edit=(e)=>{

    const {id, fname,lastname,location,gmail,birthday,education}=e;
    console.log(e)
    localStorage.setItem('id',id)
    localStorage.setItem('fname',fname)
    localStorage.setItem('lname',lastname)
    localStorage.setItem('location',location)
    localStorage.setItem('gmail',gmail)
    localStorage.setItem('birthday',birthday.split("T")[0])
    localStorage.setItem('education',education)
}
const search=()=>{

    if(!searchval){
        alert("ENTER VALLED INPUT")
    return
      }
   axios.get(`http://localhost:8800/searchresult/${searchval}`).then(getted=>{setList(getted.data)}
   )


}
    return(    
    <div  className='tablediv'>
        <h1> Student management system</h1>
       
        <div  className='search'>  <input type='text' placeholder='Search' onChange={e=>setSearchval(e.target.value)}></input><button onClick={search}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button> <Link to='./FormStd'className='linkmove' >ADD</Link></div>
<br></br>
          <table> 
          <thead>
            <th>ID </th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>LOCATION</th>
            <th>GMAIL</th>
            <th>D.O.B</th>
            <th>EDUCATION</th>
            <th>EDIT</th>
            <th>DELETE</th>
            </thead>
        <tbody>
        {list.map((e,i)=>{
                 return(
                <tr key={i}>
                    <td >{e.id}</td>
                    <td>{e.fname}</td>
                    <td>{e.lastname}</td>
                    <td>{e.location}</td>
                    <td>{e.gmail}</td>
                    <td>{e.birthday.split("T")[0]}</td>
                    <td>{e.education}</td>
                    <td> <Link to='./Edit'><button className='but' onClick={()=>{edit(e)}}><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></button> </Link></td>
                    <td><button className='but' onClick={()=>{deleteapi(e)}}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></td>
                </tr>
                 )
                 })}
             </tbody>
            </table>
    </div>)

} 
export default TableStd;