import React, { Fragment } from "react"



const hobbiesDes = (props)=> {
    const newHobbies = props.filter(item=>item.isActive===true)
    const inactiveHob = props.filter(item=>item.isActive===false)
   return( 
    <div>
        <h3>Count: {count(newHobbies)} Active Hobbies</h3>
        <h3>Active Hobby </h3>
        <ul>{newHobbies.map((prop,index)=><li key={index}>{prop.name}: {prop.description}</li>) }</ul>
        <h3>Inactive Hobby </h3>
        <ul>{inactiveHob.map((prop,index)=><li key={index}> {prop.name}: {prop.description}</li>) }</ul>
    </div>
   )}

const count =(propHobbies)=>{
    return propHobbies.length
}

function Hobbies({props,showText}){
    console.log(showText,'consologueando')
    return(            
        <Fragment>
            {showText ? hobbiesDes(props):<h3>not available</h3>}
        </Fragment>
        
    )
}
export {Hobbies};

/**
 * 
 * PARA .JS
 impport React, { Fragment } from "react"

const propsHobbies = [{name: 'Soccer', description: 'Some Description', isActive: true },{name: 'Basketball', description: 'Some Description', isActive: true }]
const hobbiesDes = (props)=> {
    <div>
        <ul>{props}.map(name) </ul>
    </div>
}

const hobbies = (props)=>{
    return(
        <div>
            <h3>
                {hobbiesDes(propsHobbies)}
            </h3>
        </div>
    )
}
export default hobbies;
 */