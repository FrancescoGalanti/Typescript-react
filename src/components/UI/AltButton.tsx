type AltButtonProps<T> = {
    color: string,
    counterHistory: T[]
}

export default function AltButton<T>({ color, counterHistory }: AltButtonProps<T>) {
    function handleClick() {
        console.log(counterHistory)
    }
    return (
        <button style={{ backgroundColor: color }} onClick={handleClick}>click me</button>
    )
}
