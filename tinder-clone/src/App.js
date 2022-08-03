import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import Map from './Map';
import Swipe from './Swipe';
import PayMethodOptions from './payMethodOptions';
function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />  
      <Swipe/>  
     
    </div>
  );
}

export default App;
