import React from "react";
import PropTypes from "prop-types";
// movie 컴포넌트는 state를 필요로 하지 않기 때문에 class 안쓰고
// function을 쓰겠다.
function Movie({ id, year, title, summary, poster }) {
  return (
    <div>
      <h4>{title}</h4>
      <img src={poster} />
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
