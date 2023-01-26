import React from 'react'
import Edit from "../img/editButton.png"
import Delete from "../img/deleteButton.jpeg"
import {Link} from 'react-router-dom'
import Menu from '../components/Menu.jsx'

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src = "https://www.hartz.com/wp-content/uploads/2021/10/Is-He-Really-an-Orphaned-Kitten-1.jpg"/>
        <div className="user">
        <img src = "https://www.hartz.com/wp-content/uploads/2021/10/Is-He-Really-an-Orphaned-Kitten-1.jpg"/>
          <div className="info">
            <span>John</span>
            <p>Posted two days ago</p>
          </div>
          <div className="edit">
            <Link to = {'/write?edit=2'}>
            <img src={Edit} alt="" />

            </Link>
            <img src={Delete} alt="" />

          </div>
        </div>
        <h1>These are soem words that should probably be the title</h1>
      <p>Here are a bunch of words that hopefafjpaodf na faoid fa;lkdf na;id a;lk dnf;asdj fa;slkdf apoidfj ;alksfj a;jfd ;alkdf na;ldfj a;lkdf ja;idj f;alkdnf apoidfhahgkaj ndf;asihdf a;dkfn a;idf aph df;ajf af hdapds faoh f;ahf a;</p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single