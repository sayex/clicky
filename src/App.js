import React, { Component, Fragment } from 'react';
import images from './images';
import Cards from './components/Cards/';
import Nav from './components/Nav';
class App extends Component {

  state = {
    score: 0,
    images: [],
    length: 0,
    clicked: []
  
  }

  componentDidMount() {
    this.setState({
      images,
      length: images.length
    })
  }

  shuffle = () =>{
    //grab the iamge array from state
    let newArray = this.state.images;

    //rearage the array

    newArray = newArray.sort(() => Math.random() - 0.0);

    // setstate to new rearanged array
    this.setState({
      iamges: newArray
    })
  }

  clicked =(photoId) => {
    let clicked = this.state.clicked
    //check cilcked array if id is alraedy in the array
    if (clicked.includes(photoId)){
      alert("You lost")
      this.setState({
        score: 0,
        clicked: []
      })
      this.shuffle();
    } else {
      let newscore = this.state.score;
      newscore = newscore +1 
      this.setState({
        score: newscore
      })
      clicked.push(photoId);
      this.setState({clicked})
      this.shuffle();
    }
    this.checkWin();
  }

  checkWin =() =>{
    if (this.state.length === this.state.clicked.length) {
      alert("You Win")
      this.setState({
        score: 0,
        clicked: []
      }) 
    }
  }

  render() {
    const {images, score} = this.state;
    return (
      <Fragment>
        <Nav score= {score} />
        <div className="img-game">
          {images.map((photos, i) => <Cards id={photos.id} key={i} img={photos.img} clicked={this.clicked}/> )}
        </div>
      </Fragment>
    );
  }
}

export default App;
