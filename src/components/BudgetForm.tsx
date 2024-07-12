import { ChangeEvent, useMemo, useState } from "react";
import { useBudget } from "../hooks/useBudget";

const BudgetForm = () => {
  const [budget, setBudget] = useState(0);
  const {dispatch} = useBudget()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber);
  };

  const isValid = useMemo(() => {
    return (budget <= 0 || isNaN(budget)) ? false : true   
  }, [budget])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(budget)
    dispatch({type: "add-budget", payload: {budget}})
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className="text-blue-600 text-4xl font-bold text-center"
        >
          Definir presupuesto
        </label>
        <input
          type="number"
          name="budget"
          id="budget"
          placeholder="Definir presupuesto"
          className="border-2 border-gray-300 bg-white  p-3  w-full"
          value={budget}
          onChange={handleChange}
        />
      </div>
      <input 
        type="submit" 
        value="Definir presupuesto" 
        className="disabled:opacity-45 disabled:cursor-not-allowed bg-blue-600 hover:bg-blue-700 cursor-pointer uppercase w-full p-3 text-white font-black"
        disabled={!isValid}
       />
    </form>
  );
};

export default BudgetForm;
