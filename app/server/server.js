const express=require("express");
const mysql=require("mysql");
const cors = require("cors");
const app=express();
//conver all data in json formate
app.use(express.urlencoded({extended:true}))
app.use(express.json());
//cors used for 
app.use(cors())
//dbconnection
const mysqlinst=mysql.createConnection(
    {
     "database":"newdb",
     "host":"localhost",
     "port":3306,
     "user":"root",
     "password":''
    }
)
 mysqlinst.connect(err=> err? console.log(err):console.log("conncted"))
 // post api calling
 app.post('/postdata',(req,res)=>{
    const fname=req.body.fname;
    const lname=req.body.lname;
    const gmail=req.body.gmail;
    const education=req.body.education;
    const location=req.body.location;
    const birthday=req.body.birthDay;
    console.log(fname)
    console.log(lname)
    console.log(gmail)
    console.log(education)
    console.log(location)
    console.log(birthday)
    mysqlinst.query(`insert into student (fname,lastname,location,gmail,birthday,education) values("${fname}","${lname}","${location}","${gmail}","${birthday}","${education}")`,(err,result)=> err?console.log(err):console.log("added successefully"))
 }
 )


//get api calling
 app.get('/getdata',(req,res)=>{
  
mysqlinst.query(`select * from student`,(err,result)=>{
  //err?console.log(err):res.send(result) 
  if(err){
    console.log(err)

  }
  else{
    res.send(result);
    console.log(result)
  }
})
 })
 app.post('/deletedata',(req,res)=>{
    const id =req.body.id;
    console.log(id)
    mysqlinst.query(`delete from student where id=${id}`,(err,result)=>err?console.log(err):res.send(result))
 })
 app.put('/updatedata/:id/:fname/:lname/:location/:gmail/:birthday/:education',(req,res)=>{
  console.log(req.params.id)
  console.log(req.params.fname)
  console.log(req.params.lname)
  console.log(req.params.gmail)
  console.log(req.params.birthday)
  console.log(req.params.education)
  console.log(req.params.location)
  const id=req.params.id;
  const fname=req.params.fname
  const lname=req.params.lname
  const gmail=req.params.gmail
  const location=req.params.location
  const education=req.params.education
  const birthday=req.params.birthday
  const n=true;
  mysqlinst.query(`update student set fname="${fname}",lastname="${lname}",location="${location}",gmail="${gmail}",birthday="${birthday}",education="${education}" where id=${id}`,(err,result)=> err?console.log(err):res.send(n)) }
 )
   // single route
   app.get('/searchresult/:searchdata',(req,res)=>{
    const searchdata=req.params.searchdata;
    let query=`select * from student where fname like "%${searchdata}%" or lastname like "%${searchdata}%" or gmail like "%${searchdata}%" or location like "%${searchdata}%" or education like "%${searchdata}%" or birthday like "%${searchdata}%"`

    mysqlinst.query(query,(err,result)=>err?console.log(err):res.send(result))
   })


app.listen(8800,(err)=> err? console.log(err):console.log("port lisernig"))