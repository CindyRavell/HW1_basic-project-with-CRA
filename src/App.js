import logo from './logo.svg';
import './App.css';
import {User} from './User.jsx';
import React from 'react';
import {Hobbies} from './Hobbies.jsx';
import ReactDOM from 'react-dom';

const propsHob = [{name: 'Soccer', description: 'Some Description', isActive: true },{name: 'Basketball', description: 'Some Description', isActive: true },{name: 'synchronized swimming', description: 'Some Description', isActive: false }]
function Avatar(props) {
  return <img src={props.src} className="App-logo" alt="logo" /> 
}
const props = {
  name :'Cindy',
  description  : 'A girl',
  age : 24,
  avatar: Avatar
}
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {status:true}
  }

  activeHobby=()=>{
    this.setState({status:true})
    
  }
  inactiveHobby=()=>{
    this.setState({status:false})
    
  }


  render(){
  return (
    <div className="App">
      <header className="App-header">
        <User 
          name = {props.name}
          description = {props.description}
          age = {props.age}
          avatar = {<Avatar
                      src="https://scontent.fmid1-4.fna.fbcdn.net/v/t1.6435-9/58003917_2102717049777846_5410624629259632640_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFrf_VN40XS-CDrDin9wQi98Tl_12y-YdXxOX_XbL5h1Rl0L5Jmng-p3bP5P0ylvdmCOUSM3IlIZQzx4dkmAUxV&_nc_ohc=t1IbH34_7yMAX-WXliT&_nc_ht=scontent.fmid1-4.fna&oh=a09cbd187d3d41c1d2a99b069c7ad276&oe=60C93D26"
                    />}
        />
        <div className='button'>
          <button onClick={this.activeHobby}>Active</button>
          <button onClick={this.inactiveHobby}>Inactive</button>
        </div>
      <Hobbies props={propsHob}
              showText= {this.state.status}
      />
      </header>
    </div>
  );
  }
}

export default App;
