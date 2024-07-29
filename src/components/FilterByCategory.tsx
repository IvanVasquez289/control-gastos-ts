import { categories } from "../data/categories"
import { useBudget } from "../hooks/useBudget"

const FilterByCategory = () => {
  const {dispatch} = useBudget()
  return (
    <div className="shadow-lg rounded-lg p-10 bg-white">
        <form className="flex flex-col md:flex-row gap-5 items-center">
            <label htmlFor="category">Filtrar gastos</label>
            <select 
                name="category" 
                id="category" 
                className="bg-slate-100 flex-1 p-3 rounded-md"
                onChange={(e) => dispatch({type: "active-category", payload: {category: e.target.value}})}    
            >
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