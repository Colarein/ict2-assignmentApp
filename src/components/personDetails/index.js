import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
}));

const PersonDetails = (props) => {
  const classes = useStyles();
  const person = props.person

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {person.biography}
      </Typography>
      <div className={classes.chipRoot}>
        <Paper component="ul" className={classes.chipSet}>
          {/* <li>
            <Chip label="Alias" className={classes.chipLabel} color="primary" />
          </li>
          {person.also_known_as.map((g) => (
            <li key={a.name}>
              <Chip label={a.name} className={classes.chip} />
            </li>
          ))} */}
        </Paper>
      </div>
    </>
  );
};
export default PersonDetails;