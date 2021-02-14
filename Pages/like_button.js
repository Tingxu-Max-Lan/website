'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "./pictures/MaxLan_ShaotengYu_03172019.gif"
import img2 from "./pictures/MaxLan_ShaotengYu_03172019.gif"
import img3 from "./pictures/MaxLan_ShaotengYu_03172019.gif"
function App() {
  const imgstyle = {
    height: "300px", width: "300px"
  };
  return (
    <div className="App">
      <header className="App-header">
      <Carousel>
  <Carousel.Item interval={null}>
    <img style = {
    imgstyle
  }
       src= {img1}
      alt="First slide"
    />
    <hr />
    
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    
    
  </Carousel.Item>
  <Carousel.Item interval={null}>
    <img style = {
    imgstyle
  }
      src={img2}
      alt="Second slide"
    />
     <hr />
   
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  
   
  </Carousel.Item>
  <Carousel.Item>
    <img style = {
    imgstyle
  }
  
      src={img3}
      alt="Third slide"
    />
    <hr />
  
      <h3>Third slide label</h3>
      <p>Praesent commodtredfcx</p>

    
  </Carousel.Item>
</Carousel>
      </header>
    </div>
  );
}


const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
