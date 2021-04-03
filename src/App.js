import React, {Component} from 'react';
import './App.css';
import Navigation from "./Components/Navigation/Navigation"
import Logo from "./Components/Logo/Logo"
import Imagelinkform from "./Components/Imagelinkform/Imagelinkform"
import Rank from "./Components/Rank/Rank"
import Signin from "./Components/Signin/Signin"
import Register from "./Components/Register/Register"
import Facerecognition from "./Components/Facerecognition/Facerecognition"
import Particles from 'react-particles-js';
const particleoptions = {
              particles: {
            			number: {
                    value: 100,
                    density: {
                      enable: true,
                      value_area: 800
                    }
                  }
            		}
            	}
class App extends Component {
  constructor(){
    super()
    this.state = {
      input: "",
      imageurl: "",
      box: {},
      page: "Signin",
      user:{
        id: "",
        name: "",
        email: "",
        entries: "",
        joined: ""
      }
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width)
    console.log(height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)

  }
}

  displayFaceBox = (box) => {
    this.setState({box: box});
    console.log(box)
}
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageurl:this.state.input})
    fetch("https://shrouded-beyond-76422.herokuapp.com/imageurl", {
      method:"post",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if(response){
          fetch("https://shrouded-beyond-76422.herokuapp.com/image", {
            method:"put",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
        .then(response => response.json())
        .then(count => {
          console.log(count)
          this.setState(Object.assign(this.state.user, {entries:count}))
        })
        this.displayFaceBox(this.calculateFaceLocation(response))
      }
    })}
  onPageChange = (page) => {
    this.setState({page:page, imageurl:""})
    }
  loaduser = (user) => {
    this.setState({user:{
      id: user.id,
      name: user.name,
      email: user.email,
      entries: user.entries,
      joined: user.joined
    }})
  }
  render(){
    return (
      <div className="App">
        <Particles className='Particles' params={particleoptions}/>
      {this.state.page==="home"?
        <div>
          <Navigation onPageChange={this.onPageChange}/>
          <Logo/>
          <Rank name={this.state.user.name} entries={this.state.user.entries}/>
          <Imagelinkform onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <Facerecognition box={this.state.box} imageurl={this.state.imageurl}/>
        </div>:(
          this.state.page==="Signin"?
          <Signin onPageChange={this.onPageChange} loaduser={this.loaduser}/>:
            <Register onPageChange={this.onPageChange} loaduser={this.loaduser}/>
        )
      }
      </div>
    );
  }
}

export default App;
