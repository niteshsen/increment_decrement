import React, {useState} from 'react'
import "./style.css"

const App = () => {

 const [num,setnum] = useState(0)

  const incre = () =>{
   setnum(num+1);
  }

  const decr = () =>{
    setnum(num-1);
    if(num ===0){
       
        setnum(0)  
    }
   }


  return (
    <>
      <div className="upper">
      <p> {num}</p>
        <div className="button">
            <button onClick={incre}>INCR</button>
            <button onClick={decr}>DECR</button>
        </div>
      </div>
    


    </>
  )
}

export { App };