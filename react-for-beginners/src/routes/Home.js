import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.wrap}>
          <div className={styles.lnb}></div>
          <div className={styles.container}>
            <div className={styles.header}></div>
            <div className={styles.main}>
              {movies.map((m) => (
                <Movie
                  key={m.id}
                  id={m.id}
                  coverImage={m.medium_cover_image}
                  title={m.title}
                  summary={m.summary}
                  genres={m.genres}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
