
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  console.log(value)
  return (
    <div className='add'>
      <div className="content">
      <input type="text" placeholder = 'Title'/>
      <div className="editorContainer">
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1> Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{display: 'none'}} type="file" id='file'/>
          <label htmlFor='file'>Upload Image</label>
          <div className="buttons">
            <button>Save as Draft</button>
            <button>Update</button>

          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type="radio" name="cat" id="art" value="art"/>
          <label htmlFor='art'>Art</label>
        </div>
      </div>
    </div>
  )
}

export default Write