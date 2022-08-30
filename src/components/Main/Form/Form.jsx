import {Button,FormControl,Grid,InputLabel,MenuItem,Select,TextField,Typography,} from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import useStyles from "./styles";
import { v4 as uuidv4 } from "uuid";
import { ExpensetrackerContext } from "../../../context/context";
import { incomeCategories,expenseCategories} from "../../../constants/categories";
import formate_date from "../../../utils/Formate_date";
import { useSpeechContext } from "@speechly/react-client/dist/hooks";
import CustomizedSnackbar from "../../Snackbar/Snackbar";

const initialState = {
  type: "",
  category: "",
  amount: "",
  date: "2022-08-28",
};

const Form = () => {
  const classes = useStyles();
  const [Formdata, setformdata] = useState(initialState);
  const { addTransaction } = useContext(ExpensetrackerContext); //contextapi
  const { segment } = useSpeechContext();
  const [open, setOpen] = useState(false);

  const createTransaction = () => {

    const transaction = {
      ...Formdata,
      amount: Number(Formdata.amount.split(",").join("")),
      id: uuidv4(),
    };
    setOpen(true);
    addTransaction(transaction);
    setformdata(initialState);
  };

  useEffect(() => {
    if (segment) 
   {
      if (segment.intent.intent === "add_income") {
        setformdata({ ...Formdata, type: "Income" });
      } else if (segment.intent.intent === "add_expense") {
        setformdata({ ...Formdata, type: "Expense" });
      } else if (
        segment.isFinal &&
        segment.intent.intent === "create_transaction"
      ) {
        return createTransaction();
      } else if (
        segment.isFinal &&
        segment.intent.intent === "cancel_transaction"
      ) {
        return setformdata(initialState);
      }

      segment.entities.forEach((e) => {
        const category = `${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}`;

        switch (e.type) {
          case "amount":
            setformdata({ ...Formdata, amount: e.value });
            break;
          case "category":
            if (incomeCategories.map((c) => c.category).includes(category)) {
              setformdata({ ...Formdata, type : "Income" ,category: category });
            }else if (expenseCategories.map((c) => c.category).includes(category)) {
              setformdata({ ...Formdata, type : "Expense" ,category: category });
            }break;
          case "date":
            setformdata({ ...Formdata, date: e.value });
            break;
          default:
            break;
        }
      });

      if (segment.isFinal && Formdata.amount && Formdata.type && Formdata.date && Formdata.category) {
        createTransaction();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [segment]);

  const selectCategories = // for the drop down list of categoreis from a specific type
    Formdata.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={1}>
      <CustomizedSnackbar open = {open} setOpen = {setOpen} />
      <Grid item md={12} xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          {segment && segment.words.map((w) => w.value).join(" ")}
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={Formdata.type}
            onChange={(e) => setformdata({ ...Formdata, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={Formdata.category}
            onChange={(e) =>
              setformdata({ ...Formdata, category: e.target.value })
            }
          >
            {selectCategories.map((c) => (
              <MenuItem key={c.category} value={c.category}>
                {c.category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Amount"
          type="number"
          value={Formdata.amount}
          onChange={(e) => setformdata({ ...Formdata, amount: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Date"
          type="Date"
          value={Formdata.date}
          onChange={(e) =>
            setformdata({ ...Formdata, date: formate_date(e.target.value) })
          }
        />
      </Grid>

      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
