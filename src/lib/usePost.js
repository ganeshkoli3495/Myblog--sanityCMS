import React, { useEffect, useState } from 'react'
import {client} from '../client'

const usePost = () => {
    const [post, setPosts] = useState();
    const[isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() =>{
      getPosts();
    },[])


    async function getPosts() {
      await client.fetch(
        `*[_type == "post"]| order(publishedAt desc) {
          title,
          publishedAt,
          slug,
          _id,
          excerpt,
          body,
          "name": author->name,
          "authorImage": author->image,
            mainImage{
            asset->{
              _id,
              url,
            }
            }
         
        }`
      )
        .then((data) => {
          setPosts(data),
          setIsLoaded(true)
        })
        .catch(console.error)
    }
    return [post, isLoaded];
}

export default usePost