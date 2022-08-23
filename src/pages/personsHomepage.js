import React, { useState, useEffect } from "react";
import PersonListHeader from "../components/headerPersonList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PersonList from "../components/personList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

const PersonsHomePage = (props) => {
  const classes = useStyles();
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        return json.results;
      })
      .then((persons) => {
        setPersons(persons);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <PersonListHeader title={"Persons Home Page"} />
      </Grid>
      <Grid item container spacing={5}>
        <PersonList persons={persons}></PersonList>
      </Grid>
    </Grid>
  );
};

export default PersonsHomePage;