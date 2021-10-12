import React from 'react';
import AboutBanner from '../../assets/about-banner.jpg';
import AboutHistory from '../../assets/about-history.jpg';
import Ceo from '../../assets/ceo.png';
import Team1 from '../../assets/philippe.jpg';
import Team2 from '../../assets/pallavi.png';
import Team3 from '../../assets/umair.jpg';
import Team4 from '../../assets/deepanshu.jpg';
import Team5 from '../../assets/jeetu.jpg';
import Team6 from '../../assets/emma.jpg';
import Team7 from '../../assets/sheetal.jpg';
import Team8 from '../../assets/kawan.jpg';
import Team9 from '../../assets/liam.jpg';
import Team10 from '../../assets/fruzsina.jpg';
import Team11 from '../../assets/shilpa.jpg';


function About(props){


    // $(document).ready(function(){
    //     $(".lg-team-data").hover(function(){
    //       $(".lg-team-data").css("display" , "none");
    //       $(".sm-team-data").css("display" , "block");
    //     });
    //     $(".sm-team-data").hover(function(){
    //         $(".sm-team-data").css("display" , "none");
    //         $(".lg-team-data").css("display" , "block");
    //       });
    //   });

    return(
      <>

        <section className="banner-about">
            <div className="container-fluid">
                <div className="row">
                    <img src={AboutBanner} className="banner-img img-fluid" alt="about_banner"/>
                </div>
            </div>
        </section>

        <section className="about-text py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <h1 className="Partner-text font-weight-bolder mb-4">By parents, for parents</h1>
                        <p>Great organizations are built by great teams. We're founded, managed and owned by a group of parents of young children across the world, and their friends. All of us were, for different reasons, frustrated by the quality of early years provisions in our cities, and we came together to try and create an early education company that delivered for parents, children and operators alike, all over the world.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="about-history bg-light py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                    <img src={AboutHistory} className="img-fluid" alt="about-history"/>
                    </div>
                    <div className="offset-lg-1 col-lg-5">
                        <h1 className="history-text font-weight-bolder mb-4">History</h1>
                        <p>We started with our first school in Hong Kong in Jan 2014. Since then we have opened schools in Dubai, India, the UK and Texas. Our franchise operations began in 2019 and 2020 has seen us launching Kïdo Home, our online preschool offering.</p>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="founder py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                    <img src={Ceo} className="img-fluid" alt="founder"/>
                    </div>
                    <div className="col-lg-5">
                        <div className="founder-info-data">
                            <i className="fas fa-quote-left fav-icons-small float-left"></i>
                            <p className="pt-4">Our vision for the future of childcare is where humans focus on learning, teaching, caring and interacting - and smart machines do everything else.</p>
                            <i className="fas fa-quote-right fav-icons-small float-right"></i>
                        </div>
                        <div className="founder-info">
                            <h3>Aniruddh Gupta</h3>
                            <span>Founder and CEO</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="team bg-light py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <h1 className="team-text font-weight-bolder mb-4">The Team</h1>
                        <p>Our core team has multiple years experience across education, banking, finance, design, hospitality, marketing and much else. We also have several years experience in raising children in different cultures, cities and countries. We have over thirty professionals in six different hubs around the world, giving us in depth expertise, cross-cultural sensibility and an ability to service parents and clients across the world.</p>
                        <div className="team-listing pt-4">
                            <div className="row">
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team1} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Philippe Sachs</h5>
                                            <small>Deputy CEO, CEO UK,</small><br/>
                                            <small>London</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">Head of Public Sector, Standard Chartered. Ex Goldman, JP Morgan. Member, Council of Foreign Relations. Georgetown University.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team2} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Pallavi Nath</h5>
                                            <small>COO, CEO Asia</small><br/>
                                            <small>Singapore</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">Head of Revenue Management, Conrad Asia. Vice President HSMAI South Asia. Cornell University.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team3} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Umair Tariq</h5>
                                            <small>CFO, CEO ME&Africa</small><br/>
                                            <small>Dubai</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">Head of Africa Structuring, Standard Chartered. London School of Economics, CFA.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team4} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Deep Pandita</h5>
                                            <small>CEO USA. Head Tech</small><br/>
                                            <small>Houston</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">Co-Head, Energy Business0, Stark Investments. Director Electricity Research, Citadel. </p>
                                    </div>
                                </div>
                                </div>
                                <div className="row pt-5">
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team5} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Jeetu Karsan</h5>
                                            <small>CEO India</small><br/>
                                            <small>Mumbai</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">Entrepreneur with 18y track record. Vice President and Head of Marketing, Inter Publicity (India). MBA, JBIMS,</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team6} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Emma Phillips</h5>
                                            <small>Head Operations, UK</small><br/>
                                            <small>London</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">15 years experience in the UK and internationally. Most recently Asquith and Bright Horizons, with Outstanding Ofsted Ratings</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team7} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Sheetal Agarwal</h5>
                                            <small>Creative Director</small><br/>
                                            <small>London</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">International Award winning Artist and Documentary Filmmaker. MFA, City University, Hong Kong.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team8} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Kawan Gujral</h5>
                                            <small>Business Dev, USA</small><br/>
                                            <small>Houston</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">10y+ experience in education management across three countries, in the Pre-K and K-12 space </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-5">
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team9} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Liam Hailstone</h5>
                                            <small>Business Dev, Asia</small><br/>
                                            <small>Hong Kong</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">Teacher, marketer, quality control analyst and environmental analyst </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team10} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Fruzsina Benyei</h5>
                                            <small>Curriculum & Training Asia</small><br/>
                                            <small>Dubai</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">Over 10 years experience in the early years, including as teacher and principal. Masters in Education </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="lg-team-data">
                                        <img src={Team11} className="team-img img-fluid" alt="teams"/>
                                        <div className="team-data pt-3">
                                            <h5>Shilpa Marla</h5>
                                            <small>COO India</small><br/>
                                            <small>Mumbai</small>
                                        </div>
                                    </div>
                                    <div className="sm-team-data pt-4 d-none">
                                        <p className="text-center">Over 15y experience in HR across start ups and large organizations at different leadership levels. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     
      </>

    );

}

export default About;


