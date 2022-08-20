import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import SimilarMovie from "../components/similarMovie";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import SimilarMovies from "../components/similarMovies";

const SimilarMoviesPage = (props) => {
  const {
    state: { movie, similarMovie },
  } = useLocation();
  return (
    <PageTemplate movie={movie}>
      <SimilarMovie similarMovie={similarMovie} />
      <Link to={`/similars/${movie.id}`}>
        <Button variant="outlined" size="medium" color="primary">
          <SimilarMovies movie={movie} />
          See More Movies like this ...
        </Button>
      </Link>
    </PageTemplate>
  );
};

export default SimilarMoviesPage;
