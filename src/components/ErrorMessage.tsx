import { ReactNode } from "react"

type ErrorMessageProps = {
    children: ReactNode
}

const ErrorMessage = ({children}: ErrorMessageProps) => {
  return (
    <p className="bg-red-600 text-white my-2 p-2 rounded text-center font-bold text-sm">
        {children}
    </p>
  )
}

export default ErrorMessage