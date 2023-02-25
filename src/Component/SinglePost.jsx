import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from '../client'
import imageUrlBuilder from "@sanity/image-url";
import PortableText from '@sanity/block-content-to-react'



const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const SinglePost = () => {

  const {slug} = useParams()
  const [singlePost, setSinglePost] = useState([]);


  useEffect(() =>{
    client.fetch(
      `*[slug.current == "${slug}"]{
        title,
        publishedAt,
        slug,
        excerpt,
        body,
        "name": author->name,
        "authorImage": author->image,
        "authorBio": author->bio,
          mainImage{
          asset->{
            _id,
            url,
          }
          }
       
      }`
    )
      .then((data) => {
        setSinglePost(data[0])
      })
      .catch(console.error)
  },[slug])

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  return (
    <div>
      <div
        className="single_banner"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4150035014005602) 0%), url('${singlePost?.mainImage?.asset?.url}')`,
          backgroundSize: "cover",
          backgroundPosition: "enter",
          height: "400px",
          width: "100%",
        }}
      >
        <div className="single_banner_content max-width">
          <h1>{singlePost?.title}</h1>
          <p>
            {singlePost.excerpt}
                   
          </p>
        </div>
      </div>

      <div className="single_banner_fullcontent max-width">
        <div className="single_banner_meta">
          <h1>{singlePost.title}</h1>
          <span className="date">{formatDate(singlePost.publishedAt)}</span>
        </div>
        <div className="single_banner_text">
                  <PortableText
                    blocks={singlePost.body}
                  />
        </div>
        <div className="author_box">
          <div className="author_img">
          {singlePost && singlePost.authorImage && (
              <img
                alt={singlePost.name}
                src={urlFor(singlePost.authorImage).width(100).url()}
              />
          )}
          </div>
          <div className="author_info">
            <h1>{singlePost.name}</h1>
            {/* <p>{singlePost.authorBio}</p> */}
            <PortableText blocks={singlePost.authorBio} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;