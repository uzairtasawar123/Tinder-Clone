import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person'
import { IconButton } from '@material-ui/core'
import fire_img from './images/fire.png'
import ForumIcon from '@material-ui/icons/Forum'; 
const Header = () => {
  return (
    <div className='header'>
      <IconButton>
            <PersonIcon fontSize="large" className = "header_icon" />
      </IconButton>
      <img
      className='fire_icon'
        src={fire_img}
      />

      <IconButton>
        <ForumIcon fontSize='Large' className="header_icon"/>
      </IconButton>
      
    </div>
  )
}

export default Header