import React from 'react'

const Editor = () => {
  return (
    <div className='editors max-width'>
            <h2>Editor's Pick</h2>
            <div className='editors_posts'>
        <div className='editor_post' style={{backgroundImage: 
            `linear-gradient(90deg, rgba(0,0,0,0.4598214285714286) 0%, rgba(0,0,0,0.4654236694677871) 100%),url('https://images.unsplash.com/photo-1670272505497-d532f0b50702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`,backgroundSize: "cover",
            backgroundPosition: " center"}}>
            <h1>Richird Norton photorealistic rendering as real photos</h1>
            <p>Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.</p>
        </div>
        <div className='editor_post' style={{backgroundImage: 
            `linear-gradient(90deg, rgba(0,0,0,0.4598214285714286) 0%, rgba(0,0,0,0.4654236694677871) 100%),url('https://images.unsplash.com/photo-1676807882724-1027059e6289?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`,backgroundSize: "cover",
            backgroundPosition: " center"}}>
            <h1>Richird Norton photorealistic rendering as real photos</h1>
            <p>Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.</p>
        </div>
        </div>
    </div>
  )
}

export default Editor