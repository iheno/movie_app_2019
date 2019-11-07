import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  // async componentDidMount(){
  //   const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
  // }

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  componentDidMount(){
    this.getMovies();
  }


  render(){
    // use es6
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : "We are ready!"}
      </div>
    );
  }
}

export default App;
