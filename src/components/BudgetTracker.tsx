import AmountDisplay from "./AmountDisplay";

const BudgetTracker = () => {
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
          amount={500}
        />
        <AmountDisplay
          label="Disponible"
          amount={300}
        />
        <AmountDisplay
          label="Gastado"
          amount={200}
        />
      </div>
    </div>
  );
};

export default BudgetTracker;
