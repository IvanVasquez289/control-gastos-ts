import { categories } from "../data/categories";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { DraftExpense, Value } from "../types";
import { ChangeEvent, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";


const ExpenseForm = () => {

  const [expense, setExpense] = useState<DraftExpense>({
    expenseName: '',
    amount: 0,
    category: '',
    date: new Date(),
  })

  const [error, setError] = useState('')

  const {dispatch} = useBudget()

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = e.target
    const isAmountField = ['amount'].includes(name)

    setExpense({
      ...expense,
      [name]: isAmountField ? +value : value
    })
  }

  const handleChangeDate = (value: Value) => {
    setExpense({ ...expense, date: value })
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(Object.values(expense).includes('')) {
      setError('Todos los campos son obligatorios')
      return
    }
    dispatch({type: 'add-expense', payload: {draftExpense: expense}})
    setError('')
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <legend className="text-2xl uppercase font-black text-center border-b-4 border-blue-500 py-2">
        Nuevo gasto
      </legend>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <div className="flex flex-col gap-2">
        <label className="text-xl" htmlFor="expenseName">
          Nombre del gasto:
        </label>

        <input
          type="text"
          id="expenseName"
          name="expenseName"
          className="bg-slate-100 p-2"
          placeholder="Ej. Transporte"
          value={expense.expenseName}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xl" htmlFor="amount">
          Cantidad:
        </label>

        <input
          type="number"
          id="amount"
          name="amount"
          className="bg-slate-100 p-2"
          placeholder="Ej. 300"
          value={expense.amount}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xl" htmlFor="category">
          Categoria:
        </label>

        <select
          id="category"
          name="category"
          className="bg-slate-100 p-2"
          value={expense.category}
          onChange={handleChange}
        >
          <option value="">-- Seleccione --</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xl" htmlFor="date">
          Fecha:
        </label>

        <DatePicker 
          className="bg-slate-100 p-2"
          value={expense.date}
          onChange={handleChangeDate}
        />
      </div>

      <input
        type="submit"
        value="Anadir Gasto"
        className="w-full rounded-md bg-blue-600 text-white p-2 uppercase font-bold cursor-pointer"
      />
    </form>
  );
};

export default ExpenseForm;
