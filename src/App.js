import React from 'react';

// function Food(props) {
//   console.log(props.name);
//   return <h3>I love Poteto!</h3>
// }

/* sample thing*/
function Food( {name} ){
  return <h3>I love {name}</h3>
}


function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Food name="Pizza" />
      <Food name="Noodle" />
      <Food name="Rice" />
    </div>
  );
}

export default App;
