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
    //console.log("add");
    // this.setState({ count: this.state.count + 1 });
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    //console.log("minis");
    this.setState(current => ({ count:  current.count - 1 }));
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
