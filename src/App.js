import React from "react";
import PropTypes from "prop-types";

/* function compornent */
// function App() {
//   return (
//     <div>
//       {foodILike.map(dish => (
//         <Food 
//           key={dish.id} 
//           name={dish.name} 
//           picture={dish.image} 
//           rating={dish.rating} 
//         />
//       ))}
//     </div>
//   );
// }

/* class compornent */
class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minis");
  };
  render(){
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
