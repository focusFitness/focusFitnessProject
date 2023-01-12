import React from 'react'
import {Link} from 'react-router-dom';




const Home = () => {
  const posts = [
    {
      id:1,
      title: "This is the title",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Sem integer vitae justo eget. Mi proin sed libero enim sed faucibus turpis. Vitae suscipit tellus mauris a diam maecenas. Eget arcu dictum varius duis at consectetur lorem. Blandit turpis cursus in hac habitasse platea dictumst quisque. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. At erat pellentesque adipiscing commodo elit at. Bibendum at varius vel pharetra vel turpis. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Eu tincidunt tortor aliquam nulla facilisi cras. Ut tortor pretium viverra suspendisse potenti. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Nascetur ridiculus mus mauris vitae ultricies leo.",
      img:'https://i.pinimg.com/736x/03/b4/76/03b47628916d02daf9c3c89f7a62d177--cute-cat-wallpaper-wallpaper-pictures.jpg'
    },
  ]
  return (
    <div className='home'>
      <div className='posts'>
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to = {'/post/${post.id}'}>
              <h1>{post.title}</h1>
              <p>{post.desc}</p>
              <button>read more</button>
              </Link>
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Home