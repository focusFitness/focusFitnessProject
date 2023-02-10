import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'

export const Menu = ({cat}) => {
 
  const [posts, setPosts] = useState([]);

  console.log(cat)

  useEffect(()=>{
    const fetchData = async () =>{
      try{ 
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      }catch (err){
        console.log(err);
      }
    }
    fetchData();
  }, [cat])


  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
    </div>
  )
}

export default Menu
