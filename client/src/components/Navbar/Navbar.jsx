import React, { Component } from 'react';
import logo from "../images/logo.png"
import simo from "../images/simo-youness.png"
import "./Navbar.css"
function Navbar (){
        return (
            <div>
   <header id='header'>
        <nav>
            <div className="btns">
                <button id='btnaa'>ابدأ</button>
                <button id='btnaaaa'>تسجيل الدخول</button>
                <select>
                    <option>Languages</option>
                    <option>English</option>
                    <option>Francais</option>
                    <option>Arabic</option>
                </select>
            </div>
            <div className="logo">
                <img src="https://youcan.shop/images/home_page_images/youcan-logo-white.png" alt="logo" />
            </div>
        </nav>
        <div dir="rtl" lang="ar">
                    <h1 >اتصل بنا</h1>
                    <p>فريق دعم متاح 24 ساعة/ 7 أيام لمساعدتك والإجابة عن جميع أسئلتك لتحقيق المزيد من النجاح. </p>
        </div>
    </header>
            </div>
        );
    
}

export default Navbar;