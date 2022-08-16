import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import SimilarMovie from "../components/similarMovie";

const SimilarMoviesPage = (props) => {
  const {
    state: { movie, similarMovie },
  } = useLocation();
  return (
    <PageTemplate movie={movie}>
      <SimilarMovie similarMovie={similarMovie} />
    </PageTemplate>
  );
};

export default SimilarMoviesPage;
