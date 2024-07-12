import { useMemo } from "react"
import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"
import BudgetTracker from "./components/BudgetTracker"
import ExpenseModal from "./components/ExpenseModal"

function App() {

  const {state} = useBudget()

  const isValidBudget = useMemo(() => state.budget > 0   , [state.budget])
  return (
    <>
      <header className="bg-blue-600 py-10 max-h-72">
        <h1 className="uppercase text-4xl text-white font-black text-center">
          Planificador de Gastos
        </h1>
      </header>
      <div className="max-w-3xl mx-auto shadow-lg rounded-lg mt-10 p-10 bg-white">
        {isValidBudget ? <BudgetTracker/> :  <BudgetForm/>}
      </div>
      {isValidBudget && <ExpenseModal/>}
    </>
  )
}

export default App
