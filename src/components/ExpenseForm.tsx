import { categories } from "../data/categories";

const ExpenseForm = () => {
  return (
    <form className="space-y-5">
      <legend className="text-2xl uppercase font-black text-center border-b-4 border-blue-500 py-2">
        Nuevo gasto
      </legend>

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
        >
          <option value="">-- Seleccione --</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
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
