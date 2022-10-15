import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Detail.module.css";

/**
 * 'movie'로 넘어온 뒤 경로 id값을 알아내는 방법은 무엇일까?
 * useParams라는 함수를 불러오면 해당 값을 알아낼수 있다.
 * object형태로 파라미터가 들어오는데 key값의 이름은 무엇으로 지정되는가?
 * App.js에서 변수 처리를 위해서 ':변수명'이 필요하다고 했는데,
 * 이때 지정한 변수명이 key값의 이름이 된다.
 * @returns
 */
function Detail() {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(true);
  };

  useEffect(() => {
    getMovie();
  }, []);
  const genres_obj = {
    Documentary: "다큐멘터리",
    Music: "음악",
    Drama: "드라마",
    Sport: "스포츠",
    Action: "액션",
  };
  const lang = {
    en: "영어",
    ko: "한국어",
    fa: "페르시아어",
  };
  return (
    <div className={styles.container}>
      <h1>Detail Info.</h1>
      <hr />
      {!loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <div className={`${styles.box50} ${styles.leftBox}`}>
            <img src={movie.large_cover_image} />
          </div>
          <div className={`${styles.box50} ${styles.rightBox}`}>
            <h2 className={styles.title}>{movie.title}</h2>
            <h3 className={styles.year}>{movie.year}</h3>
            <ul className={styles.movieInfo}>
              <li>
                장르: [
                {movie.genres.map((g, idx) =>
                  idx + 1 === movie.genres.length
                    ? genres_obj[g]
                    : genres_obj[g] + ", "
                )}
                ]
              </li>
              <li>평점: {movie.rating} / 10</li>
              <li>언어: {lang[movie.language]}</li>
              <li>
                상영시간: {Math.round(movie.runtime / 60)}시간{" "}
                {movie.runtime % 60}분
              </li>
            </ul>
          </div>
        </div>
      )}
      <button>
        <Link to={`${process.env.PUBLIC_URL}/`}>목록</Link>
      </button>
    </div>
  );
}
export default Detail;
