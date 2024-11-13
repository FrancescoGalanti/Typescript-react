import { createContext, Dispatch, useReducer } from "react"

type TState = number

type TAction =
    | { type: 'MINUS_COUNTER' }
    | { type: 'ADD_COUNTER' }


type TCounterContext = {
    state: TState,
    dispatch: Dispatch<TAction>
}

const initialValue: TState = 0;


export const CounterContext = createContext<TCounterContext | null>(null);


function counterReducer(state: TState, action: TAction) {
    switch (action.type) {

        case "MINUS_COUNTER":
            return state > 0 ? state - 1 : state;
        case "ADD_COUNTER":
            return state + 1;
        default:
            throw new Error('No valid action type for counterReducer')
    }
}


export default function ContextCounterProvider({ children }: React.PropsWithChildren) {
    const [state, dispatch] = useReducer(counterReducer, initialValue)

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    )
}
