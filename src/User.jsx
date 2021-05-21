import { Fragment } from "react";


function User(props) {
  return(  
    <div>
      <div>
        {props.avatar}
      </div>
      <h1>    
        Hello, my name is {props.name}
      </h1>
      <h2>
        age: {props.age}
      </h2>


    </div>
  )
}

export {User};