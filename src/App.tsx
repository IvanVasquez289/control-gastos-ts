import BudgetForm from "./components/BudgetForm"

function App() {

  return (
    <>
      <header className="bg-blue-600 py-10 max-h-72">
        <h1 className="uppercase text-4xl text-white font-black text-center">
          Planificador de Gastos
        </h1>
      </header>
      <div className="max-w-3xl mx-auto shadow-lg rounded-lg mt-10 p-10 bg-white">
        <BudgetForm/>
      </div>
    </>
  )
}

export default App
