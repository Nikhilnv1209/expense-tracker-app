import { useContext } from "react";
import { ExpensetrackerContext } from "./context/context";
import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/categories";
// onst initialState = {
  //     type: 'Income',
  //     category : 'Salery',
  //     amount: '',
  //     date: '',
  //   };
  
  // { type: 'Travel', amount: 0, color: expenseColors[3] },
  // { type: 'Food', amount: 0, color: expenseColors[4] },
  // { type: 'Shopping', amount: 0, color: expenseColors[5] },
  // { type: 'House', amount: 0, color: expenseColors[6] },
  
  const useTransactions = ({title}) => {
    resetCategories();
    
  const { transactions } = useContext(ExpensetrackerContext);
  // console.log(transactions); // transaction.type = "Expense || Income" , category = "Salery, Travel, Food, House, etc" , amount = "amount" , date = "date"

  // income or expense
  const transactionsType = transactions.filter((t) => t.type === title); 
  // total of income || expense
  const total = transactionsType.reduce((acc, curr) => acc + curr.amount ,0);
  // sub categories
  // salary,  travel , food,  etc
  const Catergories = title === "Expense" ? expenseCategories : incomeCategories;
  
  
  transactionsType.forEach((t) => {  
    const category = Catergories.find((c) => c.category === t.category);
    if (category) {
      category.amount += t.amount;
    }
  } );

  const filtercategory = Catergories.filter((c) => c.amount > 0);
  
  const chartData = {
    datasets: [
      {
        data: filtercategory.map((c) => c.amount),
        backgroundColor: filtercategory.map((c) => c.color),
      }],
      
      labels: filtercategory.map((c) => c.category)
    }
    
    
    return {total, chartData };
    
  };
  
  export default useTransactions;
  