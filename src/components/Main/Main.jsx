import React , {useContext} from "react";
import Form from "./Form/Form";
import List from "./List/List";
import {Card,CardHeader,CardContent,Typography,Grid,Divider} from "@material-ui/core";
import useStyles from "./styles";
import { ExpensetrackerContext } from "../../context/context";
import InfoCard from "../infocard";

const Main = () => {

  const { totalbalance } = useContext(ExpensetrackerContext);
  

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance <i className="fas fa-rupee-sign"></i> {totalbalance}
        </Typography>
        <Typography variant="subtitle1" style={{ lineHeight: "1.2em", marginTop: "15px" }}>
          <InfoCard/>{/* Infocard Component*/}
        </Typography>

        <Divider className={classes.divider}/>
        <Form />  {/* ...Form Component*/}
      </CardContent>

      <CardContent className={classes.CardContent}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <List />{/* List Component */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
