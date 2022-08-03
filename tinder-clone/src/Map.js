import React, { useState } from 'react'

const Map = () => {
    const [obj, setstate] = useState([
        {
        
        Name : 'Salman',
        url : 'https://en.wikipedia.org/wiki/Image'

    },
    {
        Name : 'Uzair',


    }
    ])
  return (
    <div>
      {obj && obj.map((p)=>{
        return(
            <div >
              {p.Name}
            </div>    
        )
      })}
    </div>
  )
}

export default Map