import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterPersonsCard(props) {
  const classes = useStyles();

  const actorNames = [
    { id: 1, name: " Daisy Ridley" },
    { id: 2, name: "Mark Hamill" },
    { id: 3, name: "Yoda" }
  ]

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SearchIcon fontSize="large" />
            Filter the movies.
          </Typography>
          <TextField
            className={classes.formControl}
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="actor-names-label">Actor Name</InputLabel>
            <Select
              labelId="actor-names-label"
              id="actor-names-select"
            >
              {actorNames.map((actorNames) => {
                return (
                  <MenuItem key={actorNames.id} value={actorNames.id}>
                    {actorNames.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SearchIcon fontSize="large" />
            Sort the movies.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}