import React, {useEffect, useState} from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import salmanpic from './images/salman.jpg'
import ammirpic from './images/amir.jpg'
import sharukhpic from './images/sharukh.jpg'
import axios from 'axios'


const TinderCards = () => {

     /////    People Object 
  const [people , setstate] = useState([
    {
      Name:"Salman khan",
      url:salmanpic
    },
    {
      Name:"Ammir Khan",
      url:ammirpic
    },
    {
      Name:"Shahrukh khan",
      url:sharukhpic
    }


  ])

  /*
  ////////   Post Data to Backend   ///////
  
    let putdata = async ()=>{
        let response =  await fetch('http://localhost:5000/tinder/post' ,{
            method : "POST",
            body: JSON.stringify(people.Name , people.url)
    });
    const res = response.json();
    console.log(res);
}
*/
 


/*
  /////////  Getting Data from Backend    /////////// 
  useEffect(()=>{
      let fetchdata = async ()=>{
       let res =  await axios.get('http://localhost:5000/tinder/get')
       setstate(res.data)
       console.log(res.data)
      }
      fetchdata();
  } ,[])

  */

 const Swiped = (dir , name)=>
 {
   console.log("Remove" + name)
 }

 const outOfFrame = (name) =>
 {
    console.log(name + "Left the Screen")
 }

  return (
    <div className='Tindercards'>
        
        <div className='tinder_container'>
        
        {people && people.map((person)=>{
           return <TinderCard
            className='swipe'
            key={person.Name}
            preventSwipe = {["up", "down"]}
            onSwipe={(dir)=> Swiped(dir, person.Name)}
            onCardLeftScreen={()=> outOfFrame(person.Name)}


            >
                <div className='card' style={{backgroundImage : `url(${person.url})`}}>
                   {/* <img src={person.url } ></img> */}
                <h3>
                    {person.Name}
                </h3>
                </div>
              
            </TinderCard>
        })
         }
       
        </div>
      
    </div>
  )
}

export default TinderCards