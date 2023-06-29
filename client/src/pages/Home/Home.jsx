import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import bar from '../../assets/bar.png'
import '../../App.css'
import {useState, useEffect} from 'react'
import Chatbot from 'react-chatbot-kit'

const Home = () => {
  const [num, setnum] = useState(1)
  const [bar1, setbar1] = useState("bar1")
  const [home, sethome] = useState("home-container-21")
  const [style, setstyle] = useState("c1")

  async function timeout(delay) {
    return await new Promise( res => setTimeout(res, delay) );
}

useEffect(() => {
  function handleResize() {
    if(window.innerWidth >800){
      setnum(1);
      setstyle("c1");
      sethome("home-container-21")
    }
  }

  // Attach the event listener to the window object
  window.addEventListener('resize', handleResize);

  // Remove the event listener when the component unmounts
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  const handleClick = (e) => {
    
    if(num%2 === 1){
      timeout(300).then(()=>{
        setbar1("bar2");
        setstyle("c2");
        sethome("home-container-22");
      }); //for 1 sec delay
      
    }
    else{
      timeout(300).then(()=>{
        setbar1("bar1");
        setstyle("c1");
        sethome("home-container-21");
    
      }); //for 1 sec delay
      }
     
    setnum(num+1);  
  }

  return (
    <div className="home-container-1">
      
      <div className={style}>
      <LeftSidebar />
      </div>
      <img src={bar} className={bar1} alt='bar' width="40px" height="40px" onClick={handleClick}></img>
      <div className={home} >
        <HomeMainbar/>
        <RightSidebar />
        {/* these components are going to be used by several pages so we will be keeping them in components */}
      </div>
    </div>
  )
}

export default Home
