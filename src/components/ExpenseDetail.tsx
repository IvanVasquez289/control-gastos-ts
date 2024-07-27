import { formatDate } from "../helpers"
import { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"

type ExpenseDetailProps = {
    expense: Expense
}
const ExpenseDetail = ({expense}: ExpenseDetailProps) => {
//   console.log(expense)
  return (
    <div className="bg-white shadow-lg rounded-lg p-10 w-full border-b border-gray-200 flex items-center gap-5">
        <div></div>
        <div>
            <p>{expense.expenseName}</p>
            <p className="text-slate-600 text-sm">{formatDate(expense.date!.toString())}</p>
        </div>
        <AmountDisplay
            amount={expense.amount}
        />
    </div>
  )
}

export default ExpenseDetail