import React  from "react";



let x = 10;
let y = 20;

let g = x + y;
function View(){
    return(
        <div id='panel'>
            <h3>{g}</h3>
            <h1>test</h1>
        </div>
    );
}
export default View;