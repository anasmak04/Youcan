import React, { useState } from 'react';
import bg from '../images/login-bg.png'
import './Login.css'
import {BrowserRouter as Router, Routes, Route, Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

function Login () {
    let navigate = useNavigate()

    const [data,setData] = useState({
        name: "",
        email : "",
        password : ""
    })
   
       const {name,email,password} = data
       const handleChange = (e) => {
           setData({...data,[e.target.name]:e.target.value})
   }
   

        const handleSubmit = async (e) => {
            e.preventDefault()
            try{
               const res = await axios.post('/login',{name,email,password},
                {headers : {'Content-Type': 'application/json'}}        
                )
                localStorage.setItem("token1",res.data.token)
                navigate("/")
            }
            catch(err) {
                console.log(err)
            }
        }
        return (
            <div>
                <div className='bg'>
                <div dir='rtl' lang='ar'>
                <div className="header">
						<img src="https://static3.youcan.shop/store-admin/images/youcan-logo.png" alt="YouCan" />
					<h1>سجل الدخول لإدارة متجرك</h1>
			</div>
            <div className='form-control'>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={name} name='name' type='text' placeholder="اسم المتجر"  />  <br />
                    <input  onChange={handleChange} value={email} name='email' type='email' placeholder="البريد الإلكتروني"  /><br />
                    <input   onChange={handleChange} value={password} name='password' type='password' placeholder="كلمة المرور"  /><br />
                    <a href='#'> هل نسيت كلمة السر؟</a>
                    <button type='submit'>تسجيل الدخول</button>
                     </form>
            </div>
            <div className='footend'>
                    <p>لم تقم بالتسجيل بعد؟
أنشيء متجرك</p>
            </div>
                </div>
                </div>
            </div>
        );
    
}

export default Login;