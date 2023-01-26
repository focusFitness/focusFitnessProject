import React from 'react'

export const Menu = () => {
    const posts = [
        {
          id:1,
          title: "This is the title",
          desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Sem integer vitae justo eget. Mi proin sed libero enim sed faucibus turpis. Vitae suscipit tellus mauris a diam maecenas. Eget arcu dictum varius duis at consectetur lorem. Blandit turpis cursus in hac habitasse platea dictumst quisque. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. At erat pellentesque adipiscing commodo elit at. Bibendum at varius vel pharetra vel turpis. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Eu tincidunt tortor aliquam nulla facilisi cras. Ut tortor pretium viverra suspendisse potenti. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Nascetur ridiculus mus mauris vitae ultricies leo.",
          img:'https://i.pinimg.com/736x/03/b4/76/03b47628916d02daf9c3c89f7a62d177--cute-cat-wallpaper-wallpaper-pictures.jpg'
        },
      ]
  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
    </div>
  )
}

export default Menu
