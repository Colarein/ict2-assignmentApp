import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getPersons } from "../api/tmdb-api";
// import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const PersonsHomePage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discover actors", getPersons);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const persons = data.results;

  // These three lines are redundant; we will replace them laterg.
  // const favourites = movies.filter((m) => m.favouurite);
  // localStorage.setItem("favourites", JSON.stringify(favourites));

  return (
    <PageTemplate
      title="Discover Actors"
      persons={persons}
    // action={(person) => {
    //   return <AddToFavouritesIcon movie={movie} />;
    // }}
    />
  );
};

export default PersonsHomePage;