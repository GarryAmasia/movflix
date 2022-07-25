import { CssBaseline } from "@mui/material";
import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Actors } from "./actors/Actors";
import { MovieInformation } from "./movieInformation/MovieInformation";
import { Movies } from "./movies/Movies";
import { NavBar } from "./navBar/NavBar";
import { Profile } from "./profile/Profile";

import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
