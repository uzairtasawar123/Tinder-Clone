import React from 'react'
import './Swipe.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core'; 
const Swipe = () => {
  return (
    <div className='swipe_items'>
      <IconButton className='swipe_element'>
      <FavoriteIcon fontSize='Large'/>
      </IconButton>

      <IconButton  className='swipe_element'>
        <StarRateIcon fontSize='Large'/>
      </IconButton>

      <IconButton  className='swipe_element'>
        <ReplayIcon fontSize='Large'/>
      </IconButton>

      <IconButton  className='swipe_element'>
       <CloseIcon fontSize='Large'/>
      </IconButton>

    </div>
  )
}

export default Swipe