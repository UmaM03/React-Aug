import React from 'react'

const  Wish=(props)=>{
    console.log(  props);
    return(
    <div>
            <h1>wishes come true {props.name} loves to play {props.hobbu}</h1>
            {props.children}
    </div>
    )
    
} 

export default Wish
