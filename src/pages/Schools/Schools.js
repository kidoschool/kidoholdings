import React, {useState}  from 'react';
import {Link} from "react-router-dom";
import SchoolBanner from '../../assets/school-banner.jpg';
import SchoolNetwork1 from '../../assets/school-network-bn1.jpg';
import SchoolNetwork2 from '../../assets/school-network-bn2.jpg';
import SchoolNetwork3 from '../../assets/school-network-bn3.jpg';
import SchoolNetwork4 from '../../assets/school-network-bn4.jpg';
import SchoolNetwork5 from '../../assets/school-network-bn5.jpg';
import SchoolNetwork6 from '../../assets/school-network-bn6.jpg';
import SchoolNetwork7 from '../../assets/school-network-bn7.jpg';
import SchoolNetwork8 from '../../assets/school-network-bn8.jpg';
import Map3 from "../../components/Map/Map3";
import centerContents1 from '../../MapCenters.json';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { isMobile } from "react-device-detect";



function Schools(props){

    const images = [
        {
            original: SchoolNetwork1,
            thumbnail: SchoolNetwork1,
            thumbnailHeight : 100,
        },
        {
            original: SchoolNetwork2,
            thumbnail: SchoolNetwork2,
        },
        {
            original: SchoolNetwork3,
            thumbnail: SchoolNetwork3,
        },
        {
            original: SchoolNetwork4,
            thumbnail: SchoolNetwork4,
        },
        {
            original: SchoolNetwork5,
            thumbnail: SchoolNetwork5,
        },
        {
            original: SchoolNetwork6,
            thumbnail: SchoolNetwork6,
        },
        {
            original: SchoolNetwork7,
            thumbnail: SchoolNetwork7,
        },
        {
            original: SchoolNetwork8,
            thumbnail: SchoolNetwork8,
        },
      ];

      const [ map_centre ] = useState({lat: 19,lng: 10});
      let map_zoom = 0;

        isMobile ? map_zoom = 1 : map_zoom = 2
  

    return(
      <>

        <section className="banner-opportunit">
            <div className="container-fluid">
                <div className="row">
                    <img src={SchoolBanner} className="banner-img img-fluid" alt="school_banner"/>
                </div>
            </div>
        </section>

        <section className="Meeting py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <h1 className="Meeting-text font-weight-bolder mb-4">Wow schools</h1>
                        <p>Under our two brands, Kïdo and Safari Kid International, we are creating magical and engaging learning spaces. Infused with cutting edge pedagogy and great teachers to nurture and enhance every child’s innate curiosity, creativity and ability to be a lifelong learner.</p>
                        <div className="offering-link text-center py-4">
                            <Link to="/franchise" className="my-btn center">Our franchise offering</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="school-network py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                    {/* <img src={SchoolNetwork} className="img-fluid" alt="school_network"/> */}
                    <ImageGallery items={images} showThumbnails={false} onPlay={true}/>
                    </div>
                    <div className="offset-lg-1 col-lg-5">
                        <h1 className="network-text font-weight-bolder mb-4">Network</h1>
                        <p>We operate preschools and nurseries in nine cities and five countries across the world, including Houston, London, Dubai, Mumbai and Hong Kong. Our network is rapidly growing across more cities and countries.</p>
                    </div>
                </div>
            </div>
        </section>


        <section className="con-map py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                    <Map3 centerContents1={centerContents1} map_centre={map_centre} map_zoom={map_zoom}   />
                    </div>
                </div>
            </div>  
        </section>

    
      </>

    );

}

export default Schools;