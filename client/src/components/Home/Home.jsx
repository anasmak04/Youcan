import React, { useState } from 'react';
import "./Home.css"
import logo from "../images/logo.png"
import simo from "../images/simo-youness.png"
import stripe from "../images/stripe.svg"
import {BrowserRouter as Router, Routes, Route, Link,useNavigate, Navigate} from 'react-router-dom'
import axios from 'axios'

function Home (){
    let navigate = useNavigate()
   

    const [data,setData] = useState({
        email : ""
    })
    
    const {email} = data
    const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})}

    const handleSubmit = async (e) => {
     
        e.preventDefault()
    document.getElementById('inputa').value="";
        try{
           let apw =  await axios.post("/myEmail",{email})
              navigate("/")
          }
        catch(err){
            console.log(err)
        }
    }
    function logout(){
        localStorage.removeItem("token1")

        navigate("/Login")
    }
        return (
            <div>
                
    <header>
        <nav>
            <div className="btns">
            {localStorage.getItem("token1")? <a id='btnaaaa' onClick={logout}>تسجيل الخروج</a>:                <Link to="/Login">                <button id='btnaa'>ابدأ</button>
</Link>
}
{localStorage.getItem("token1")? undefined :  <Link to="/Register">                <button id='btnaaa'>تسجيل الدخول</button>
</Link>
}

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

        <div className="parent1">
            <div className="box11">
                <img src="https://youcan.shop/images/home_page_images/Illustration-youcan-simo-youness.png" alt="backgound" />
                <div dir='rtl' lang='ar'>
                    <h1 className="h11">اكتشف  Youcan<br />و ابدأ مشروعك عبر الأنترنيت   </h1>
                </div>
            </div>


            <div className="box22">
                <div dir='rtl' lang='ar'>
                    <h1>هل ترغب في إنشاء متجر على الأنترنت وتطوير تجارتك؟
                        لا تبحث كثيرا !
                    </h1>
                    <h2>YouCan، كل ما تحتاج إليه لبدء مشروعك عبر الأنترنت.</h2>
                    <h3>لا تضيّع المزيد من الوقت، فنحن نضع تحت تصرفك أفضل الأدوات وأحسن التقنيات المتواجدة في سوق التجارة الإلكترونية لبيع منتجاتك.
                    </h3>
                    <form onSubmit={handleSubmit}>
    <input onChange={handleChange} value={email} id="inputa" name="email" type="email" placeholder="أدخل عنوان بريدك الإلكتروني" />
                    <button>ابدأ الأن</button>
                    </form>
                </div>
            </div>

        </div>
     
      
    </header>
    <main>
        <section id="features">
            <small>Youcan</small>
            <div dir='rtl' lang='ar'><h3>المميزات</h3></div>
            <div className="boxarent">
            <div className="box">
                <img src={stripe} alt="" />
                <div dir='rtl' lang='ar'><h2>توزيع المبيعات في حسابات متعددة على Stripe  </h2></div>
                <div dir='rtl' lang='ar'><p>يمكنك إضافة العديد من حسابات Stripe في متجرك، بالإضافة إلى تحصيل وتحويل المبيعات إلى جميع تلك الحسابات بشكل متوازي. على سبيل المثال، لديك حساب...</p></div>
            </div>
            <div className="box">
                <img src="https://youcan.shop/images/home_page_images/fb-pixel.svg" alt="" />
                <div dir='rtl' lang='ar'><h2>دعم حسابات متعددة في فيسبوك Pixels                </h2></div>
                <div dir='rtl' lang='ar'><p>هل تخشى فقدان بياناتك المخزنة في فيسبوك بيكسل؟ الآن مع YouCan يمكنك إضافة العديد من pixels إلى متجرك بسهولة وبشكل مجاني.                </p></div>
            </div>
            <div className="box">
                <img src="https://youcan.shop/images/home_page_images/language.svg" alt="" />
                <div dir='rtl' lang='ar'><h2>لغات المتجر                </h2></div>
                <div dir='rtl' lang='ar'><p>لا تضيع وقتك في الترجمة، اختر لغة متجرك بين أزيد من 10 لغات عالمية في 30 ثانية فقط، واجعل هدفك الوحيد هو جلب المبيعات.</p>
                </div>
            </div>
            <div className="box">
                <img src="https://youcan.shop/images/home_page_images/express-checkout.svg" alt="" />
                <div dir='rtl' lang='ar'><h2>إدارة البيكسل الخاص بالإعلانات على الشبكات الاجتماعية                </h2></div>
                <div dir='rtl' lang='ar'><p>نوفر لك إمكانية تهيئ متجرك الإلكتروني للتوافق مع جميع إضافات بيكسل الخاصة بالشبكات الاجتماعية بكل سهولة وسرعة. لن تواجه أي صعوبة بعد الآن مع ف...</p></div>
            </div>
            <div className="box">
                <img src="https://youcan.shop/images/home_page_images/codm.svg" alt="" />
                <div dir='rtl' lang='ar'><h2>برنامج إدارة الدفع عند الاستلام المتكامل                </h2></div>
                <div dir='rtl' lang='ar'><p>هل تعلم أن منصة YouCan توفر لك كل ما تحتاجه لإدارة متجرك؟ عبر برنامج COD Manager يمكنك متابعة فريقك أولا بأول، كما يمكنك متابعة المكالمات الها...</p></div>
            </div>
            <div className="box">
                <img src="https://youcan.shop/images/home_page_images/data-analysis.svg" alt="" />
                <div dir='rtl' lang='ar'><h2>SEO: تحسين الترتيب على محركات البحث
                </h2></div>
                <div dir='rtl' lang='ar'><p>المتاجر التي تستعمل منصة YouCan، صفحاتها تحصل على ترتيب أفضل في محركات البحث، ويعود الفضل في ذلك إلى إمكانية التحكم في كل تفاصيل المنتج لتناسب عناكب محركات البحث.                </p></div>
            </div>
        </div>
        <button className='abtn'>عرض كل المميزات</button>
        </section>
        <section id="questions">
            <h1>YouCan</h1>
            <div dir='rtl' lang='ar'><h2>الأسئلة المتكررة</h2></div>
            <div className="boxpare">
            <div className="boxparent">
                <div className="boxa1 left">
                    <div dir='rtl' lang='ar'>
                        <p>هل يجب علي الدفع مقابل الحصول على التحديثات؟</p>
                        <h3>لا. نحن نمنح التحديثات المستمرة بالإضافة إلى ميزات جديدة مجانا. عندما نقوم بإجراء تحديث أو إضافة ميزات جديدة، فإنها تظهر تلقائيًا في لوحة تحكم متجرك.                        </h3>
                    </div>
                </div>
                <div className="boxa1 right ">
                    <div dir='rtl' lang='ar'>
                        <p>هل يجب علي الدفع مقابل الحصول على التحديثات؟</p>
                        <h3>لا. نحن نمنح التحديثات المستمرة بالإضافة إلى ميزات جديدة مجانا. عندما نقوم بإجراء تحديث أو إضافة ميزات جديدة، فإنها تظهر تلقائيًا في لوحة تحكم متجرك.                        </h3>
                    </div>
                </div>

                <div className="boxa2 left">
                    <div dir='rtl' lang='ar'><p>هل ينبغي علي تعلم البرمجة والتصميم من أجل إنشاء متجر احترافي على منصة YouCan؟                    </p></div>
                    <div dir="rtl" lang="ar"><h3>ليس بالضرورة أن تكون لديك مهارات تقنية لإنشاء متجر احترافي. فمع منصتنا قل وداعا لهذا الأمر. ففي دقائق معدودة، يمكنك إعداد متجرك بشكل احترافي. لن تحتاج لهذا الغرض إلى أي شيء أو إلى أي شخص لكي تصمم متجرك ليكون جذابا لكل الزوار. ومن جهة أخرى، نحن ندعوك دائما إلى تطوير قدراتك التقنية لتكون قادرا على تخصيص متجرك بطريقة مميزة واحترافية عبر إضافة أكواد CSS لمتجرك.                    </h3></div>
                </div>

                <div className="boxa2 right">
                    <div dir="rtl" lang="ar"><p>هل يمكن لشخص ما الاطلاع على بيانات متجري؟ </p></div>
                    <div dir="rtl" lang="ar"><h3>YouCan حريصة جدا على حماية بيانات عملائها، لهذا فإن المنصة طُوّرت وفق أفضل الشروط التقنية المتعلقة بحماية الهوية، والحقوق، والحريات، والحياة الخاصة، وكل ما من شأنه أن يمس بها عبر استخدام المعلوميات، في احترام تام لبنوذ القانون رقم 09.08 المتعلق بحماية الأشخاص الذاتيين تجاه معالجة المعطيات ذات الطابع الشخصي. لقد خضعت المنصة لعدة إجراءات مراقبة قبل إطلاقها، وحاليا، لا توجد أية ثغرة تخص سلامة عملائنا، كما نتوفر على ميثاق داخلي يتعلق بمعالجة البيانات الشخصية. بالإضافة إلى أن طاقم الدعم مقيد بولوج المعلومات الضرورية فقط لإنجاز مهامه.                    </h3></div>
                </div>
                <div className="boxa3 left">
                    <div dir='rtl' lang='ar'><p> ما هو عدد الزوار والمنتجات التي لا يمكن تجاوزها في المتجر؟                    </p></div>
                    <div dir="rtl" lang="ar"><h3> 
                        يمكنك إدخال عدد غير محدود من المنتجات، واستقبال عدد غير محدود من الزوار المستهدفين غير الوهميين. نحن نوفر لك خدمة غير محدودة. استمتع بإدارة متجرك بدون التفكير في أي شيء. نحن هنا لمساعدتك على تحقيق الأرباح.


                    </h3></div>
                    </div>
                <div className="boxa3 right">
                    <div dir="rtl" lang="ar"><p> هل يمكنني استخدام أسماء دومينات مختلفة لمتجري؟                    </p></div>
                    <div dir="rtl" lang="ar"><h3> نحن نوفر لك إمكانية ربط متجرك بعدد غير محدود من الدومينات. استخدم حتى أكثر من 100 دومين في متجرك، وانطلق لتحقيق المبيعات.                    </h3></div>
                </div>
             
            </div>
            <button className='read'>اقرأ المزيد</button>
        </div>
            
        </section>

        
    </main>
   <footer>
    <section id="shop">
        <div className="myshop">
            <div dir="rtl" lang="ar">
          <h1>افتح متجرك اليوم</h1>
          <h2>YouCan.shop</h2>
          <p>ابدأ مغامرتك في التجارة الإلكترونية</p>
          <img src="https://youcan.shop/images/home_page_images/bg-bottom.svg" alt="shop" />
                <form action="/" method="post">
                    <input type="email" id="email" name="email" placeholder="أدخل عنوان بريدك الإلكتروني" />
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
               <Link to="/JobNow"><li>البحث عن وظيفة</li></Link>
               <Link to="/Contact"><li>اتصل بنا</li></Link>
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
                    {/* <Link to="/Contact"><li>اتصل بنا</li></Link> */}
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

export default Home;