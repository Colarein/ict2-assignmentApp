import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { getSimilarMovies } from "../../api/tmdb-api";

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});

export default function SimilarMovies({ movie }) {
  const classes = useStyles();
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    getSimilarMovies(movie.id).then((similarMovies) => {
      setSimilarMovies(similarMovies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Link
        to={`/similars/${movie.id}`}
        state={{
          similarMovie: similarMovies,
          movie: movie,
        }}
      >
        See Movie
      </Link>
    </TableContainer>
  );
}
