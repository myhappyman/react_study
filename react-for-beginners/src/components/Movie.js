import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

/**
 * 어떤 영화인지 구분값으로 사용하기 위해서 props로 id값을
 * 전달하고 es6 ``문법으로 Link값을 처리한다.
 *
 * @param {*} param0
 * @returns
 */
function Movie({ id, coverImage, title, summary, genres }) {
  return (
    <div className={`${styles.card_box} ${styles.clear}`}>
      <div className={styles.left}>
        <img src={coverImage} alt={title} />
      </div>
      <div className={styles.right}>
        <h2>
          <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <div className={styles.genres}>
          <ul>
            <li>Genres : [</li>
            {genres.map((g, idx) =>
              idx + 1 === genres.length ? (
                <li key={g}>{g}</li>
              ) : (
                <li key={g}>{g},&nbsp;</li>
              )
            )}
            <li>]</li>
          </ul>
        </div>
      </div>
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
