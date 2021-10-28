import React from 'react';
import KidoVillageBanner from '../../assets/kv-banner.jpg';



function KidoVillage(props){

    return(
      <>

        <section className="banner-usa">
            <div className="container-fluid">
                <div className="row">
                    <img src={KidoVillageBanner} className="banner-img img-fluid" alt="usa_banner"/>
                </div>
            </div>
        </section>

        <section className="franchising pt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <h1 className="franchising-text font-weight-bolder mb-4">Micro Preschools and Daycares</h1>
                        <h3 className="semi-bold-text mb-4">Quality, affordable early years education. Everywhere</h3>
                        <p>Kïdo Village is a platform that allows any person to set up a preschool or daycare centre in their homes (we call them Kïdo Village Pods), and any parent to find quality, affordable early years care and education around the corner from where they live. we provide the training, certification, curriculum, quality control and ongoing support to the Pod owners. The Kïdo Early Years program has been specially modified to be delivered in a home setting, so parents get a world class education for their children, in their neighbourhoods.</p>
                        <h3 className="semi-bold-text text-secondary mb-4">Kïdo Village is available only in India.</h3>
                        <div className="contact-link text-center py-4">
                            <a href="https://www.kidovillage.com/" target="_blank" rel="noreferrer" className="my-btn center">Visit the Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="how-it-works pt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h1 className="how-it-works-text font-weight-bolder mb-4">How it Works</h1>
                        <p>It's simple. If you want to set up a Kïdo Village Pod in your home, just sign up one the website and we'll be in touch with the next steps. If you're a parent, you can search and select a Pod near you, schedule tours and find one that suits you! Watch the video for an overview of how Kïdo Village works!</p>
                    </div>
                    <div className="col-lg-5">
                        <iframe width="450" height="250" src="https://www.youtube.com/embed/HB4Pn1BftpQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>

        <section className="village-button pb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="contact-link text-center pt-5">
                            <a href="https://www.kidovillage.com/" target="_blank" rel="noreferrer" className="my-btn center">Visit the Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     
      </>

    );

}

export default KidoVillage;