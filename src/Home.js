import React, { useState } from 'react'

const Home = () => {

     const [gram,setGrams]=useState(1)
     const change=(even)=>{
        const inputGrams=even.target.value
        
        if (inputGrams >=0 ){
            setGrams(inputGrams)
        }
     }
     const  goldcal=(gram,rate)=>{
        return  gram*rate
     }
  return (
    <div className='counter'>
       <h2> Gold weight Counter </h2>
       <input type='number' value={gram} onChange={change} />
       <p>1gram=5500</p>
    <h1> {`${gram} is equal to ₹ ${goldcal(gram,5500)}`}</h1>
    </div>
  )
}

export default Home