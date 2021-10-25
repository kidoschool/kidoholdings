import React from 'react';
import {Link} from "react-router-dom";
import Moment from 'react-moment';
import moment from 'moment';

function RelatedBlogs(props) {
  
    const relatedBlogs = JSON.parse(localStorage.getItem("blogData"));

    return(
        <>
        <section className="latest-news py-5">
        <div className="container">
            <h2 className="pl-5">Related News</h2>
            <div className="row justify-content-center py-3">
            <div className="col-lg-11">
                <div className="row">
                {Object.entries(relatedBlogs).slice(0, 3).map((item,k) => {
                    // console.log(item)
                return( <>
                    <div className="col-lg-4 pb-4" key={item[0]}>
                        <div className="card shadow">
                        {/* <img className="blog-card-img-top" src={item[1].Image} alt="Card image cap"/> */}
                            <div style={{backgroundImage: `url(${item[1].Image})`}} className="card-img-top blog-img"></div>
                            <div className="card-body">
                            <p className="card-text"><Moment format="DD MMM">{item[1].Date}</Moment></p>
                            <h5 className="card-title pb-4 pr-4">{item[1].Name}</h5>
                            <Link to={{ pathname: "/post/" + item[1].SlugName +"/"}} className="btn btn-sm btn-outline-primary">Read more</Link>
                            </div>
                        </div>
                    </div>
                </>)
                })}   
                </div>
            </div>
            </div>
        </div>
        </section>

        </>
    )
}

    export default RelatedBlogs;