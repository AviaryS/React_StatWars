import React, { useEffect, useState } from "react";
import Film from "../../components/Film/Film";
import Loading from "../../components/Loading/Loading";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.dev/api/films/")
      .then((res) => res.json())
      .then((res) => {
        setFilms(res.results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {films.map((item, index) => (
        <Film item={item} key={index} index={index} />
      ))}
    </div>
  );
};

export default HomePage;
