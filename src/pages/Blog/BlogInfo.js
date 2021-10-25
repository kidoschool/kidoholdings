import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import $ from 'jquery';
import parse from 'html-react-parser';
import {Link} from "react-router-dom";
import RelatedBlogs from "../../components/RelatedBlogs";

function BlogInfo(props) {

    const blogContents = JSON.parse(localStorage.getItem("blogData"));


    const name = props.match.params.title;
    console.log(name);
    
    var selectedBlog = {};
    $.each(blogContents, function (k, v) {
      if(name == v.SlugName){
        return selectedBlog = v;
      }
    });
    console.log(selectedBlog);

    return(
        <>
          <section className="main-banner bg-light-blue py-5">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-9 text-center">
                        <h1 className="blog-info-title py-5">{selectedBlog.Name}</h1>
                        <img src={selectedBlog.Image} className="blog-info-img img-fluid"/>
                    </div>
                </div>
            </div>
            </section>

            <section className="blog-info-discription bg-light py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div>{parse(selectedBlog.LongDescription)}</div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedBlogs/>
        </>
    )

}


export default BlogInfo;
