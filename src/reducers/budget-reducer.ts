import { uuidAdapter } from "../config/uuid-adapter"
import { DraftExpense, Expense } from "../types"

export type BudgetActions = 
    {type: 'add-budget', payload: {budget: number}} |
    {type: 'show-modal'} |
    {type: 'hide-modal'} |
    {type: 'add-expense', payload: {draftExpense: DraftExpense}} |
    {type: 'remove-expense', payload: {id: Expense['id']}} |
    {type: 'active-expense', payload: {id: Expense['id']}} |
    {type: 'update-expense', payload: {expense: Expense}}


export type BudgetState = {
  budget: number
  modal: boolean
  expenses: Expense[]
  activeExpenseId: Expense['id']
}

const localStorageBudget = () => {
    const budget = localStorage.getItem('budget')
    return budget ? +budget : 0
}

const localStorageExpenses = (): Expense[] => {
    const expenses = localStorage.getItem('expenses')
    return expenses ? JSON.parse(expenses) : []
}

export const initialState: BudgetState = {
  budget: localStorageBudget(),
  modal: false,
  expenses: localStorageExpenses(),
  activeExpenseId: ''
}

const createExpense = (draftExpense: DraftExpense): Expense => {
    return {...draftExpense, id: uuidAdapter.v4()}
}

export const budgetReducer = (
  state: BudgetState = initialState,
  action: BudgetActions
) => {

    if(action.type === "add-budget"){
        return {
            ...state,
            budget: action.payload.budget
        }
    }

    if(action.type === "show-modal"){
        return {
            ...state,
            modal: true
        }
    }

    if(action.type === "hide-modal"){
        return {
            ...state,
            modal: false,
            activeExpenseId: ''
        }
    }

    if(action.type === "add-expense"){
        const expense = createExpense(action.payload.draftExpense)
        return {
            ...state,
            expenses: [...state.expenses, expense],
            modal: false
        }
    }

    if(action.type === "remove-expense"){
        const updatedExpenses = state.expenses.filter(expense => expense.id !== action.payload.id)

        return {
            ...state,
            expenses: updatedExpenses
        }
    }

    if(action.type === "active-expense"){
        return {
            ...state,
            activeExpenseId: action.payload.id,
            modal: true
        }
    }

    if(action.type === "update-expense"){
        const updatedExpenses = state.expenses.map( expense => {
            if(expense.id === action.payload.expense.id){
                return action.payload.expense
            }
            return expense
        })

        return {
            ...state,
            expenses: updatedExpenses,
            modal: false,
            activeExpenseId: ''
        }
    }
    return state
}