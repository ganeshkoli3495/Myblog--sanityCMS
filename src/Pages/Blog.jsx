import React from 'react'
import Post from '../Component/Post'

const Blog = () => {
  return (
    <>
    <div className='allblog'>
    <div className='blogpage max-width flex absolute-center'>
            <h1>All Blog's </h1>
        </div>
         <Post/>
    </div>
        
    </>
  )
}

export default Blog