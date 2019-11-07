import React from "react";
import PropTypes from "prop-types";

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

function Movie ({id ,year, title, summary, poster}) {
  return (
    <h4>{ title }</h4>
  );
}

export default Movie;