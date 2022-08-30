import React from "react";
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../useTransactions";
import useStyles from "./styles";

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions({title});


  return (
    <Card className={title === 'Income' ? classes.income:classes.expense}>
      <CardHeader title = {title} />
      <CardContent>
        <Typography variant="h6"> <i className ="fas fa-rupee-sign"></i> {total}</Typography>
        <Doughnut data = {chartData}/>
      </CardContent>
    </Card>
  );
};

export default Details;
