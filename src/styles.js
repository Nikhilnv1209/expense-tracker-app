import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobile: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  main: {
    [theme.breakpoints.up("xs")]: {
    },
  },
  last: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(3),
      paddingBottom: "200px",
    },
  },
  grid: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));
