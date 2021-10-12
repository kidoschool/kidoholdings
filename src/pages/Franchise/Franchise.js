import React from 'react';
import {Link} from "react-router-dom";
import FranchiseBanner from '../../assets/franchise-banner.jpg';



function Franchise(props){

    return(
      <>

        <section className="banner-usa">
            <div className="container-fluid">
                <div className="row">
                    <img src={FranchiseBanner} className="banner-img img-fluid" alt="usa_banner"/>
                </div>
            </div>
        </section>

        <section className="franchising pt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <h1 className="franchising-text font-weight-bolder mb-4">Our franchising philosophy</h1>
                        <p>We believe that every franchisee is committed to making their school a success. Our job as franchisors is to deliver products and services that ensure continuing success for our franchisees. That is why we have created what we believe to be the most comprehensive franchise offering in the industry.</p>
                        <div className="contact-link text-center py-4">
                            <Link to="/contact" className="my-btn center">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="franchise-platform py-5 bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <div className="Partner-text-area">
                                <h1 className="Partner-text font-weight-bolder mb-4">Our Franchise Platform</h1>
                                <p>The Kïdo Early Years Platform is a set of comprehensive online and offline products and services delivering curriculum, quality assurance, training, school design, marketing, branding, and our own school management, teacher and parent communication apps. A truly 21st century franchise platform that ensures best in className child development, parent satisfaction and franchisee success outcomes.</p>
                                <p>Our program, amongst other things, offers a fully bilingual English-Spanish curriculum (currently for the USA), a fully bilingual English-Mandarin curriculum (for Hong Kong and China), and Arabic and French as additional languages.</p>
                            </div>
                            <div className="platform-listing py-4">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="list-data text-center">
                                            <i className="fas fa-cog fav-icons"></i>
                                            <h3>Operations</h3>
                                            <small>Online operations manuals, regulatory compliance and full school management system</small>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                         <div className="list-data text-center">
                                            <i className="far fa-thumbs-up fav-icons"></i>
                                            <h3>Operations</h3>
                                            <small>Online operations manuals, regulatory compliance and full school management system</small>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                     <div className="list-data text-center">
                                            <i className="fas fa-chalkboard-teacher fav-icons"></i>
                                            <h3>Operations</h3>
                                            <small>Online operations manuals, regulatory compliance and full school management system</small>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                     <div className="list-data text-center">
                                            <i className="fas fa-mobile-alt fav-icons"></i>
                                            <h3>Operations</h3>
                                            <small>Online operations manuals, regulatory compliance and full school management system</small>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row pt-5">
                                    <div className="col-lg-3">
                                     <div className="list-data text-center">
                                            <i className="fas fa-home fav-icons"></i>
                                            <h3>Operations</h3>
                                            <small>Online operations manuals, regulatory compliance and full school management system</small>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                     <div className="list-data text-center">
                                            <i className="fas fa-chart-line fav-icons"></i>
                                            <h3>Operations</h3>
                                            <small>Online operations manuals, regulatory compliance and full school management system</small>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                     <div className="list-data text-center">
                                            <i className="fas fa-user-friends fav-icons"></i>
                                            <h3>Operations</h3>
                                            <small>Online operations manuals, regulatory compliance and full school management system</small>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                     <div className="list-data text-center">
                                            <i className="fas fa-cube fav-icons"></i>
                                            <h3>Operations</h3>
                                            <small>Online operations manuals, regulatory compliance and full school management system</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="brochure-link text-center py-4">
                                <a href="https://64a46671-a752-4ee4-9521-3a4736fb44a1.filesusr.com/ugd/a1d20b_5e6bef5e6be7454a806f4e3e03152bf2.pdf" target="_blank" rel="noreferrer" className="my-btn center">Download the brochure</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        <section className="financing py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <h1 className="financing-text font-weight-bolder mb-4">Where we franchise</h1>
                        <p>We are a registered franchisor in several states in the United States. We are currently accepting selective individual franchise requests in the USA, India, Singapore, Hong Kong and China, and area development and master franchise requests from anywhere in the world. Get in touch if you would like to be a part of the Kïdo community.</p>
                        <div className="contact-link text-center py-4">
                            <Link to="/contact" className="my-btn center">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     
      </>

    );

}

export default Franchise;