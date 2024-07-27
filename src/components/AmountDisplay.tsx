import { formatCurrency } from "../helpers"

type AmountDisplayProps = {
    label?: string
    amount: number
}
const AmountDisplay = ({label, amount}: AmountDisplayProps) => {
  return (
    <div>
        <p className="text-blue-600 text-2xl font-bold">
          {label && `${label}: `}
          <span className="font-black text-black">{formatCurrency(amount)}</span>
        </p>
    </div>
  )
}

export default AmountDisplay