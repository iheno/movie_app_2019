import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  // async componentDidMount(){
  //   const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
  // }

  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // use us6
    const {data: { data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies);
    this.setState({ movies, isLoading: false });
  }
  componentDidMount(){
    this.getMovies();
  }

  render(){
  // use es6
    const { isLoading, movies } = this.state;
      return (
        <div>
          {isLoading ? "Loading..." : movies.map(movie => (
              <Movie
                key={movie.id} 
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
              />
            ) 
          )}
        </div>
      );
    }
  }

export default App;
