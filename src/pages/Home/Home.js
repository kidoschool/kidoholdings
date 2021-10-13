import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Map3 from "../../components/Map/Map3";
import centerContents1 from '../../MapCenters.json';
import Banner_video from '../../assets/banner-video-Mp4.mp4';
import Platform1 from '../../assets/platform1.jpg';
import Platform2 from '../../assets/platform2.jpg';
import Platform3 from '../../assets/platform3.jpg';


function Home(props) {


    // const [ map_zoom, setMap_zoom ] = useState("");
    const [ map_centre ] = useState({lat: 19,lng: 10});


    return(
        <>
            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-text-area">
                            <h1 className="banner-text">preschool franchise, redefined</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="welcome my-5">
            <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <div className="welcome-text-area">
                                <h1 className="bold-text font-weight-bolder mb-4">Welcome to Kïdo</h1>
                                <h3 className="semi-bold-text mb-4">Quality early education, anywhere</h3>
                                <p>We are creating a global platform dedicated to delivering the highest quality early years education anywhere in the world. We are integrating advances in pedagogy, technology and design to create unique learning experiences for children, at our schools, in their homes, and in their neighbourhood.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-philosophy bg-light py-5">
                <div className="container">
                    <div className="row justify-content-center py-3">
                        <div className="col-lg-11">
                            <div className="row">
                                <div className="col-lg-5">
                                    <h1>Our Vision</h1>
                                    <p className="description pt-4">Our vision is a future where high quality early education can be delivered seamlessly by trained practitioners to children anywhere in the world, to achieve the highest developmental outcomes possible.</p>
                                </div>
                                <div className="col-lg-5 offset-lg-1">
                                    <video width="450" id="vid" controls autoPlay loop muted>
                                        <source src={Banner_video} type="video/mp4"/>
                                        Your browser does not support HTML video.
                                    </video>              
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="Platform my-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <div className="Platform-text-area">
                                <h1 className="Platform-text font-weight-bolder">Our Platform</h1>
                                <p>The Kïdo Early Years Platform is a set of comprehensive online and offline products and services delivering curriculum, quality assurance, training, school design, marketing, branding, and our own school management, teacher and parent communication apps. Our schools, franchisees, online preschool offering and curriculum delivery run on a combination of elements of the Kïdo Early Years System.</p>
                            </div>
                            <div className="card-deck pt-5">
                            <div className="row">
                                <div className="card shadow">
                                    <img src={Platform1} className="card-img-top p-3" alt="platform"/>
                                    <div className="card-body">
                                        <h3 className="card-title">Kïdo Schools</h3>
                                        <p className="card-text">We operate and franchise premium preschools under the Kïdo and Safari Kid brands in five countries.</p>
                                        <div className="platform-link text-center py-4">
                                            <Link to="/schools" className="my-btn center">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow">
                                    <img src={Platform2} className="card-img-top p-3" alt="platform"/>
                                    <div className="card-body">
                                        <h3 className="card-title">Kïdo Home</h3>
                                        <p className="card-text">The complete virtual preschool, with second and third languages, native language teachers, and the Kïdo pedagogy delivered at home</p>
                                        <div className="platform-link text-center py-4">
                                            <Link to="/" className="my-btn center">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow">
                                    <img src={Platform3} className="card-img-top p-3" alt="platform"/>
                                    <div className="card-body">
                                        <h3 className="card-title">Kïdo Village</h3>
                                        <p className="card-text">Micro-preschools and daycare centres (Pods), run by passionate providers from. their homes, on the Kïdo platform.</p>
                                        <div className="platform-link text-center py-4">
                                            <Link to="/kido-village" className="my-btn center">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="where-we py-4 bg-light"> 
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <div className="where-we-text-area">
                                <h1 className="where-we-text font-weight-bolder">Where we are</h1>
                                <p>With our main office in London, and hubs in Houston, Dubai, Mumbai, Bangalore, Singapore and Hong Kong, we cover all parts of the world. If you are looking to partner with us for any of our products in any part of the world, get in touch.</p>
                                <div className="platform-link text-center py-4">
                                    <Link to="/contact" className="my-btn center">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </section>

            <section className="con-map bg-light pb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center">
                        <Map3 centerContents1={centerContents1} map_centre={map_centre} map_zoom={2}   />
                        </div>
                    </div>
                </div>  
            </section>

                   
        </>
    )
}


export default Home;