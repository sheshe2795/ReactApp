import React, { useState } from "react";

export default function Counter(like) {
    // Set the initial count state to zero, 0
    const [count, setCount] = useState(0);
  
    // Create handleIncrement event handler
    const handleIncrement = () => {
      setCount(prevCount => prevCount + 1);
    };
  
   
    return (
      <div>
        <div className="likes">
          <span className="count">{count}</span>
         <button className="heart" onClick={handleIncrement}><i className="fas fa-heart fa-2x"></i></button> 
        </div>
    
      </div>
    );
  }


