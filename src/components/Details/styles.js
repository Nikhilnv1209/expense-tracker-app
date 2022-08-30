import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  income: {
    borderBottom: "10px solid rgba(0, 255, 0, 0.12)",
    color: "rgba(0, 200, 0, 1)",
  },
  expense: {
    borderBottom: "10px solid rgba(255, 0, 0, 0.12)",
    color: "rgba(255, 0, 0, 0.8)",
  },
}));
