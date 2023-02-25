import React from "react";
import { Link } from "react-router-dom";
import usePost from "../lib/usePost";
import ShimmerBanner from "./Shimmer/ShimmerBanner";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
const Banner = () => {


  const [post, isLoaded] = usePost();

  return (
    //     <div>
    //    <Carousel
    //         showThumbs={false}
    //         autoPlay={true}
    //         transitionTime={3}
    //         infiniteLoop={true}
    //         showStatus={false}
    //         dynamicHeight={false}
    //       >
    //         <div>
    //           <img src="https://images.unsplash.com/photo-1670349081674-90d0e76a20ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
    //           <p className="legend">Legend 1</p>
    //         </div>
    //         <div>
    //           <img src="https://images.unsplash.com/photo-1676839560107-d15f4b15b766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" />
    //           <p className="legend">Legend 2</p>
    //         </div>
    //         <div>
    //           <img src="https://images.unsplash.com/photo-1676763132943-f2a1c4c4b38d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />
    //           <p className="legend">Legend 3</p>
    //         </div>
    //       </Carousel>
    //     </div>

  <>
    {!isLoaded ? (<ShimmerBanner />) : (
      post && post[0] && (
        <Link to={`/SinglePost/${post[0].slug.current}`}>
          <div
            className="banner"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 46%, rgba(0,0,0,1) 97%), url('${post[0]?.mainImage?.asset?.url}')`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "600px",
              width: "100%",
            }}
          >
            <div className="bannner_content max-width">
              <h1>{post[0].title}</h1>
              <p>{post[0].excerpt}</p>
            </div>
          </div>
        </Link>
      )
    )}
  </>
  );
};

export default Banner;
