import { useContext } from "react";
import { CounterContext } from "../../context/ContextCounterProvider";

export function useCounterContext() {

    const context = useContext(CounterContext);

    if (!context) {
        throw new Error("the useCounterContext is outside the ContextCounterProvide")
    }

    return context
}