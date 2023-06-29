import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagList from './TagList'
import './Tag.css'
import bar from '../../assets/bar.png'
import {useState,useEffect} from 'react'

const Tags = () => {
    const tagsList = [{
        id: 1,
        tagName: "javascript",
        tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Please include all relevant tags on your question;",
    },{
        id: 2,
        tagName: "python",
        tagDesc: "Python is a multi-paradigm, dynamically typed, multipurpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax."
    },{
        id: 3,
        tagName: "c#",
        tagDesc: "C# (pronounced 'see sharp') is a high level, statically typed, multi-paradigm programming language developed by Microsoft"
    },{
        id: 4,
        tagName: "java",
        tagDesc: "Java is a high-level object oriented programming language. Use this tag when you're having problems using or understanding the language itself. "
    },{
        id: 5,
        tagName: "php",
        tagDesc: "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally designed for server-side web development"
    },{
        id: 6,
        tagName: "html",
        tagDesc: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser."
    },{
        id: 7,
        tagName: "android",
        tagDesc: "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT)."
    },{
        id: 8,
        tagName: "css",
        tagDesc: "CSS is a representation style sheet language used for describing the look and formatting of HTML, XML documents and SVG elements including colors, layout, fonts, and animations"
    },{
        id: 9,
        tagName: "Reactjs",
        tagDesc: "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be both efficient and flexible."
    },{
        id: 10,
        tagName: "node.js",
        tagDesc: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library. "
    }] 
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
      sethome("home-container-22");
    
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
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
            <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
            <div className='tags-list-container'>
                {
                    tagsList.map((tag)=>(
                        <TagList tag={tag} key={tagsList.id}></TagList>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Tags
