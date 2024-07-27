import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import { useMemo } from "react"
import { formatDate } from "../helpers"
import { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"
import { categories } from "../data/categories"
import { useBudget } from '../hooks/useBudget';



type ExpenseDetailProps = {
    expense: Expense
}

const ExpenseDetail = ({expense}: ExpenseDetailProps) => {
  
  const expenseDetails = useMemo(() => categories.find(cat => cat.id === expense.category) , [expense])
  const {dispatch} = useBudget()

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => dispatch({type: 'active-expense', payload:{id: expense.id}}) }>
        Editar
      </SwipeAction>
    </LeadingActions>
  );
  
  const trailingActions = () => (
    
    <TrailingActions>
      <SwipeAction
        onClick={() => dispatch({type: 'remove-expense', payload: {id: expense.id}}) }
        destructive={true}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );
  
  return (
    <SwipeableList>
      <SwipeableListItem
        maxSwipe={1}
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200 flex items-center gap-5">
            <div>
              <img
                src={`/icono_${expenseDetails?.icon}.svg`}
                alt="icono gasto"
                className="w-16 h-16"
              />
            </div>
            <div className="flex-1 space-y-2">
                <p className="text-slate-500 text-sm font-bold uppercase">{expenseDetails?.name}</p>
                <p>{expense.expenseName}</p>
                <p className="text-slate-600 text-sm">{formatDate(expense.date!.toString())}</p>
            </div>
            <AmountDisplay
                amount={expense.amount}
            />
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default ExpenseDetail