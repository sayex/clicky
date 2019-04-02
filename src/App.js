import React, { Component } from 'react';
import './App.css';
import images from './images';
import Cards from './components/Cards/'
class App extends Component {

  state = {
    score: 0,
    images: images,
    clicked: []
  
  }

  clicked =(photoId) => {
    let clicked = this.state.clicked
    //check cilcked array if id is alraedy in the array
    if (clicked.includes(photoId)){
      console.log("true")
    } else {
      console.log("false")
    }
    clicked.push(photoId);
    this.setState({clicked})
    console.log(photoId)
  }

  render() {
    const {images, score} = this.state;
    return (
      <div className="App">
        {images.map(photos => <Cards id={photos.id} img={photos.img} clicked={this.clicked}/> )}
      </div>
    );
  }
}

export default App;
