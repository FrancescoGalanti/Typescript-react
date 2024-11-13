import { useRef } from "react"
import AltButton from "./components/UI/AltButton"
import { useCounterContext } from "./lib/hooks/useCounterContext"
import Button from "./components/UI/Button"

function App() {

  const { state, dispatch } = useCounterContext()

  const span = useRef<HTMLSpanElement>(null)
  console.log(span);

  return (
    <>
      <h1 className="text-red-500">hello Typescript</h1>

      <Button disabled={state === 0} onClick={() => dispatch({ type: "MINUS_COUNTER" })} className="uppercase disabled:bg-pink-950">-</Button >

      <Button onClick={() => dispatch({ type: "ADD_COUNTER" })} variance="secondary" size="small">+</Button>
      <span ref={span}>{state}</span>



      {/* GENERICS */}
      < AltButton counterHistory={[1, 2, 3]} color="red" />
      <AltButton counterHistory={['1', '2', '3']} color="orange" />
      <AltButton counterHistory={[true, false, false]} color="green" />



    </>
  )
}

export default App
