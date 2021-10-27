    import React, {useState, useEffect} from 'react';
    import Axios from "axios";
    import {Link} from "react-router-dom";
    import Moment from 'react-moment';
    // import moment from 'moment';


    function Blog(props) {

      const [blogData, setBlogData] = useState("");

      useEffect(() => {
        getBlogData();
      }, []);

      const getBlogData = () => {
        Axios
        .get(`https://kido-events-default-rtdb.firebaseio.com/Blog.json`)
        .then((response) => {
          setBlogData(response.data)
          localStorage.setItem('blogData', JSON.stringify(response.data));
          // setTimeout(setPostData(response.data), 5000);
          // setLoading(false);
        })
        .catch((error) => console.log(error));
    };
    
    


    return(

        <>
  <section className="days-at-kido pt-5">
      <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-lg-11">
            <h1>Latest Blog Posts</h1>
            <p className="description pt-3">Find out more about the latest blogs, happenings, and newly released articles from our Kïdo preschools.</p>
          </div>
       </div>
      </div>
    </section> 

    <section className="latest-news pt-2 pb-5">
      <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-lg-11">
            <div className="row">
              {Object.entries(blogData).map((item,k) => {
                console.log(item)
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
  );

  

}

export default Blog;
