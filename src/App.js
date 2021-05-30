import {useState} from 'react';
import './App.css';
import Display from './components/Display';
import Counter from './components/Counter';
import logo from './sheli2.jpg';

function App() {

  const [skills, setSkills] = useState("My name is Shelique")
  
  const handleName =()=>{
    setSkills("My name is Shelique")
  }
  const handleSkills =()=>{
    setSkills("I am a Frontend Developer")
  }
  ;


  return (
    <>
    <div className= "main">
      <img className="sheli" src={logo} alt="profile"></img>
      
      <Display name = {skills}/>
        <div>
         <button className= "btn" onClick= {handleName}>Name</button>
          <button className= "btn2" onClick= {handleSkills}>Skills</button>
        </div>
        
       <Counter/> 
      
      <button className="github"> <a href="https://github.com/sheshe2795" target="_blank" alt="github profile"><i class="fab fa-github fa-3x"></i></a> </button>
    </div>
   </>   

  );
}

export default App;
