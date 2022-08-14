import React from "react";

const SimilarMovie =  ({ similarMovie }) => {
  return (
    <>
      <p>Movie Details Show here Description: {similarMovie.title} </p>
      <p>{similarMovie.content} </p>
    </>
  );
};
export default SimilarMovie;