import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { client } from '../client';
import Post from './Post'

const BigPost = () => {

  const [editorPicks, setEditorPicks] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "editorPick"]{
      "posts": posts[]->{_id,
                         title,
                         excerpt,
                         slug,
                         mainImage{
                        asset->{
                          url
                        }
                        },
                         body}
    }`).then((data) => {
      setEditorPicks(data),
      console.log(data[0]);
    }).catch((error) => {
      console.error('Error fetching editor picks:', error);
    });
  }, []);
  return (
    <>
   {editorPicks && editorPicks.map((post, id) => (
     <Link to={`/SinglePost/${post?.posts[0]?.slug?.current}`}>
      <div key={id} className='Big_post ' style={{backgroundImage: 
      `linear-gradient(90deg, rgba(0,0,0,0.4598214285714286) 0%, rgba(0,0,0,0.4654236694677871) 100%),
       url('${post?.posts[0]?.mainImage?.asset?.url}')`,backgroundSize: "cover",
     backgroundPosition: "top center",}}>
             <div className='Bigpost_content max-width '>
                 <h1>{post?.posts[0]?.title}</h1>
                 <p>{post?.posts[0]?.excerpt}</p>
             </div>
     </div>
     </Link>
   ))
   
   }
    <Post />
    </>
  )
}

export default BigPost