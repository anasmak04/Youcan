import React, { useState } from 'react';
import './Register.css'
import {BrowserRouter as Router, Routes, Route, Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
function Register () {
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
            await axios.post("/register",{name,email,password},
              {headers : {'Content-Type': 'application/json',
              'Authorization': 'JWT fefege...'}}        
            )
              navigate('/Login')
          }
        catch(err){
            console.log(err)
        }
    }
        return (
            <div>
                <div className='bg'>
                <div dir='rtl' lang='ar'>
                <div className="header">
						<img src="https://static3.youcan.shop/store-admin/images/youcan-logo.png" alt="YouCan" />
					<h1>أنشئ متجرك وابدأ البيع الآن</h1>
			</div>
            <div className='form-control'>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={name} name="name" type='text' placeholder="اسم المتجر"  />  <br />
                    <input onChange={handleChange} value={email} name="email" type='email' placeholder="البريد الإلكتروني"  /><br />
                    <input onChange={handleChange} value={password} name="password" type='password' placeholder="كلمة المرور"  /><br />
                    <button type='submit'>sign up </button>
                    </form>

                    <div className='footend'>
                    <p>هل لديك حساب بالفعل؟</p>

                </div>
            </div>

                </div>
                </div>
            </div>
        );
    
}

export default Register;