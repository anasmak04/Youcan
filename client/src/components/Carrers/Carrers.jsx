import React, { Component } from 'react';
import Navbar from "../Navbar1/Navbar1"
import Footer from "../Footer1/Footer1"
function Carrers (){

        return (
            
            <div>
                <Navbar />
                <p>carrers</p>
          <div className="careers1">
        <div dir="rtl" lang="ar">
            <h1>إذا كنت تعتقد بأنك إنسان مبدع وقادر على خلق أفكار ثورية، والمساهمة في بناء منصة احترافية، تواصل معنا، وانضم إلى فريق متميز<br /> وذي خبرة عالية، وساهم معنا في بناء فكرة ستغير حياة الملايين من الشباب.</h1>
        </div>
        <div className="parent88">
            <div className="box77">
                <img src="https://youcan.shop/images/career/join-us.png" alt="careers" />
            </div>
            <div className="box123">
                <div dir="rtl" lang="ar">
                    <form action="Careers" method="post">
                        <label>البريد الإلكتروني</label> <br />
                        <input type="email" placeholder="البريد الإلكترونية" name="email"/> <br/>
                        <label>رقم الهاتف</label><br />
                        <input type="number" placeholder="رقم الهاتف" name="Number"/><br/>
                        <div className='flex1'>
                        <label>الدولة</label> 
                        <input type="text" placeholder="الدولة" name="country"/>
                        <label>المدينة</label>
                        <input type="text" placeholder="المدينة" name="city" />
                        </div>
                        <div className='flexx'>
                        <label>التخصص</label>
                        <input type="text" placeholder="التخصص" name="specialite" id='specialite'/>
                        <label for="">السيرة الذاتية</label> 
                        <input type="file" /><br />
                        </div>
                       <div className='lastt'>
                       <label for="">إضافة نماذج من الأعمال السابقة</label><br />
                        <textarea name="message" placeholder="إضافة نماذج من الأعمال السابقة" /><br />
                        
                       </div>
                       <button type="submit">ارسال</button>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
    <Footer />
    </div>
    
        );
    
}

export default Carrers;