import { useMemo } from "react";
import AmountDisplay from "./AmountDisplay";
import { useBudget } from "../hooks/useBudget";

const BudgetTracker = () => {
  const {state} = useBudget()
  const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => total + expense.amount, 0) , [state.expenses])
  const remainingBudget = state.budget - totalExpenses;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center">
        <img src="/grafico.jpg" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center gap-8 ">
        <button
          type="button"
          className="bg-pink-600 uppercase font-bold text-white w-full p-2 rounded-lg"
        >
          Resetear App
        </button>

        <AmountDisplay
          label="Presupuesto"
          amount={state.budget}
        />
        <AmountDisplay
          label="Disponible"
          amount={remainingBudget}
        />
        <AmountDisplay
          label="Gastado"
          amount={totalExpenses}
        />
      </div>
    </div>
  );
};

export default BudgetTracker;
