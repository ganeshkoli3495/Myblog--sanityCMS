import React from 'react'
import Banner from '../Component/Banner'
import LatestPost from '../Component/LatestPost'
import BigPost from '../Component/BigPost'
import Editor from '../Component/Editor'
const Home = () => {
  return (
    <div>
        <Banner />
        <LatestPost />
        <BigPost />
        <Editor />  
    </div>
  )
}

export default Home