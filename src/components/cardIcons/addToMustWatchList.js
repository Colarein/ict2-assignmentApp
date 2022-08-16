import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const AddToMustWatchListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToMustWatchList = (e) => {
    e.preventDefault();
    context.addToMustWatchList(movie);
    console.log(movie);
  };
  return (
    <IconButton
      aria-label="add to must watch"
      onClick={handleAddToMustWatchList}
    >
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToMustWatchListIcon;
