import React from "react";
import Details from "./components/Details/Details";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import Main from "./components/Main/Main";
import { PushToTalkButton, PushToTalkButtonContainer } from "@speechly/react-ui";

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh", gap: "1.3%" }}
      >
        <Grid item sm={3} xs={12} className = {classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item sm={4} xs={12} className = {classes.main}>
          <Main />
        </Grid>
        <Grid item sm={3} xs={12} className = {classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item sm={3} xs={12}>
          <Details title="Expense" />
        </Grid>
      </Grid>

      <PushToTalkButtonContainer>
        <PushToTalkButton placement="bottom" voffset= "-10px + 1.5rem" size = "60px" />
      </PushToTalkButtonContainer>
    </>
  );
}

export default App;
