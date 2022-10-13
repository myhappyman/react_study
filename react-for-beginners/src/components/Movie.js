import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * 어떤 영화인지 구분값으로 사용하기 위해서 props로 id값을
 * 전달하고 es6 ``문법으로 Link값을 처리한다.
 *
 * @param {*} param0
 * @returns
 */
function Movie({ id, coverImage, title, summary, genres }) {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
