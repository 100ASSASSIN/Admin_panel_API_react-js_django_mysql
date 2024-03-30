import React  from "react";
import '../Components/nav.css';

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + " ";
}

let x = 10;
let y = 20;

let g = x + y;
function View(){
    return(
        <div id='panel'>
            <h3>{g}</h3>
            <h3>{text}</h3>
            <h1>test</h1>
            <div id="img"></div>
            <Gamer />
            <Add />
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
export default View;