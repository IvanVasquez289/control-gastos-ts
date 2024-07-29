import { categories } from "../data/categories"

const FilterByCategory = () => {
  return (
    <div className="shadow-lg rounded-lg p-10 bg-white">
        <form className="flex flex-col md:flex-row gap-5 items-center">
            <label htmlFor="category">Filtrar gastos</label>
            <select name="category" id="category" className="bg-slate-100 flex-1 p-3 rounded-md">
                <option value="">-- Todas las categorías --</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </form>
    </div>
  )
}

export default FilterByCategory