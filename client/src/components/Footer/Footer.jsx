import React, { Component } from 'react';

function Footer() {
        return (
            <div>
                <footer>
    <section className="shop">
        <div className="myshop">
            <div dir="rtl" lang="ar">
          <h1>افتح متجرك اليوم</h1>
          <h2>YouCan.shop</h2>
          <p>ابدأ مغامرتك في التجارة الإلكترونية</p>
          <img src="https://youcan.shop/images/home_page_images/bg-bottom.svg" alt="shop" />
                <form action="/" method="post">
                    <input type="email" name="email" placeholder="أدخل عنوان بريدك الإلكتروني" />
                    <button>ابدأ الأن</button>
                </form>
      </div>
        </div>
      </section>
       <div className="footer1">
       <div className="list">
           <div dir="rtl" lang="ar">
           <ul>
               <li><a href="">الرئيسية</a></li>
               <li><a href="/life">الحياة في YouCan</a></li>
               <li>التدريب</li>
               <li> <a href="/careers">البحث عن وظيفة</a></li>
               <li> <a href="/Contact">اتصل بنا</a></li>
           </ul>
          <img src="https://youcan.shop/images/home_page_images/youcan-logo-pink.png" alt="" />
        </div>
       
        </div>
        <div className="list2">
            <div dir="rtl" lang="ar">
                
                <ul>
                    <div className="ul">

                    <li>الشركاء</li>
                    <li>التسويق بالعمولة</li>
                    <li>خبراء YouCan</li>
                    <li>بوابة الشركاء</li>
                    <li>المطورين</li>
                </div>
               

                    <div className="ul">
                    <li>الأحكام والشروط</li>
                    <li>شروط الاستخدام</li>
                    <li>سياسة الخصوصية</li>
                    <li>ملفات تعريف الارتباط</li>
                    <li>الأسئلة المتكررة</li>
                </div>

                <div className="ul">
                    <li>الدعم</li>
                    <li>دليل المستخدم</li>
                    <li>اتصل بنا</li>
                    <li>المدونة</li>
                    <li>انضم إلينا</li>
                </div>

                    <div className="ul">
                    <li>عام</li>
                    <li>جوائز YouCan</li>
                    <li>فضاء الصحافة</li>
                    <li>سفراء YouCan</li>
                    <li>فرص التدريب في YouCan</li>
                </div>

                    <div className="ul">
                    <li>عن المنصة</li>
                    <li>من نحن</li>
                    <li>المميزات</li>
                    <li>الأسعار</li>
                    <li>العلامة التجارية</li>
                    <li>الحياة اليومية في YouCan</li>
                </div>
                </ul>

            </div>
       </div>
       <div className="social">
           <div dir="rtl" lang="ar">
               <p>تابعنا</p>
                <ul>
                    <li><i className="fab fa-pinterest fa-2x"></i></li>
                    <li><i className="fab fa-youtube fa-2x"></i></li>
                    <li><i className="fab fa-linkedin fa-2x"></i></li>
                    <li><i className="fab fa-instagram fa-2x"></i></li>
                    <li><i className="fab fa-twitter-square fa-2x"></i></li>
                    <li><i className="fab fa-twitter fa-2x"></i></li>
                    <li><i className="fab fa-facebook-square fa-2x"></i></li>
                </ul>
           </div>
       </div>
    </div>
    <div className="footer2">
        <div dir="rtl" lang="ar">
            <h3> حمل التطبيق واستمتع بالتجربة<br />
                الرائعة أينما كنت
                </h3>
              
        </div>
        <img src="https://youcan.shop/images/home_page_images/app-store.png" alt="" />
        <img src="https://youcan.shop/images/home_page_images/google-play.png" alt="" />
        <img src="https://youcan.shop/images/home_page_images/app-gallery.png" alt="" />
    </div>
    <div className="footer3">
       <div dir="rtl" lang="ar">
        <p>© حقوق النشر 2022 YouCan.shop منصة التجارة الإلكترونية</p>
       </div>
    </div>
   </footer> 
            </div>
        );
    
}

export default Footer;