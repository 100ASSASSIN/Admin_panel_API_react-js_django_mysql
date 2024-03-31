import React  from "react";
import { Helmet } from "react-helmet";
import '../Components/nav.css';

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + " ";
}

let x = 10;
let y = 20;

let g = x + y;

class Application extends React.Component {
    render () {
      return (
          <div className="application">
              <Helmet>
                  <meta charSet="utf-8" />
                  <title>My ASSASSIN</title>
                  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
              </Helmet>
              ...
          </div>
      );
    }
  };
function View(){
    return(
        <div id='panel'>
            <h3>{g}</h3>
            <h3 style={{color:'yellow'}}> {text} </h3>
            <h1>test</h1>
            <div id="img"></div>
            <div style={{color:'bule'}}><Gamer /></div>
            <div style={{color:'red'}}><Add /></div>
            <Application />
            <Table />
        </div>
    );
}
const Add = () => {
    return(
        <h2>test22</h2>
    );
}
const Gamer = () => {
    return(
        <div style={{color : 'green'}}> sdsadad asdsadadtest sdsdsds dsadasdadas dsadadasdasd asdsadasdsadsad dasdsad a</div>
    ); 
}
Gamer();
const Table = () => {
    return(
        <div>
            <p>Updates to your homepage feed
We've combined the power of the Following feed with the For you feed so there’s one place to discover content on GitHub. There’s improved filtering so you can customize your feed exactly how you like it, and a shiny new visual design. ✨</p>
        </div>
    );
}
export default View;