import React, { useState } from 'react';
import "./Contact.css"
import Navbar from '../Navbar/Navbar'
import Footer from "../Footer/Footer"
import {BrowserRouter as Router, Routes, Route, Link,useNavigate} from 'react-router-dom'
// import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';
import axios from 'axios'
function Contact(){

    const navigate = useNavigate()

    const [data,setData] = useState({
        email: "",
        lien : "",
        message : "",
        Type_Cheked : ""
    })
    const {email,lien,message,Type_Cheked} = data

    const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
}
const handleSubmit = async (e) => {
    // if(data.email == "" || data.lien =="" || data.message ==""){
    //     <Alert severity="warning">Please - enter your informations</Alert>
    // }
  document.getElementById('first').value="";
  document.getElementById('second').value="";
  document.getElementById('third').value="";
  document.getElementById('last').value="";
  document.getElementById('last1').value="";
  document.getElementById('last2').value="";
    e.preventDefault()
    try{
      let apz =   await axios.post("/Contact",{email,lien,message,Type_Cheked})
          navigate("/")
      }

    catch(err){
        console.log(err)
    }
}

        return (
            <div>
               <Navbar />
                   <div class="contact1">
            <div dir="rtl" lang="ar">
               <form onSubmit={handleSubmit} id="forma">
                <label>البريد الإلكتروني</label> <br />
                <input  onChange={handleChange} id="first" value={email} type="email" placeholder="البريد الإلكترونية" name="email" /> <br />
                <label>رابط المتجر</label><br />
                <input id="second" onChange={handleChange} value={lien} type="text" placeholder="رابط المتجر" name="lien" /><br />
                <label>ماهي المشكلة؟</label><br />
                <textarea id='third' onChange={handleChange} value={message} placeholder="ماهي المشكلة؟" name="message" /><br />
                <label>سبب التواصل</label> <br />
                    <div className="spa">
                <input id='last' onChange={handleChange}  type="radio" name="Type_Cheked" value="مشكلة تقنية" /> <label class="label">مشكلة الدفع</label>
                <input id='last1' onChange={handleChange}  type="radio" name="Type_Cheked" value="مشكلة الدفع" /> <label class="label">مشكلة تقنية  </label>
                <input  id='last2' onChange={handleChange}  type="radio" name="Type_Cheked" value="مشاكل أخرى" /> <label for="" class="label">مشاكل أخرى   </label>
                    </div>
                <button>ارسال</button>
               </form>
            </div>
        </div> 
            <Footer />
            </div>
        );
    
}

export default Contact;