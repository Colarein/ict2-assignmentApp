import React from "react";
import Person from "../components/personCard/";
import Grid from "@material-ui/core/Grid";

const PersonList = (props) => {
  let personCards = props.persons.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Person key={p.id} person={p} />
    </Grid>
  ));
  return personCards;
};

export default PersonList;