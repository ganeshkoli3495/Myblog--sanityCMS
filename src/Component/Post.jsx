import {client} from '../client'
// import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "react-router-dom";
import usePost from '../lib/usePost';
import ShimmerPost from './Shimmer/ShimmerPost';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}
const Post = () => {
  
  const [post, isLoaded] = usePost();
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  // console.log(post);
  return (
<div className="posts max-width">
  {!isLoaded ? (<ShimmerPost />) : (
     post.map((post) => (
      <Link to={`/SinglePost/${post.slug.current}`} key={post._id}>
        <div className="post">
            <img
              className="post_img"
              src={post.mainImage.asset.url}
              alt={post.title}
            />
          <div className="post-content">
            <span>{formatDate(post.publishedAt)}</span>
            <h1 className="post_name">{post.title}</h1>
            <p className="post_exrept">{post.excerpt.substring(0,140)}...</p>
            <div className="Auther_box">
              <img
                className="Auther_img"
                src={urlFor(post.authorImage).width(100).url()}
              />
              <div className="Auther_content">
                <h1 className="Auther_name">{post.name}</h1>
                <p className="Auther_post">Writer MyBlog</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    ))
  )
   }
</div>

  );
};

export default Post;
