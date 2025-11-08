import { useContext } from "react";
import { MyContext1 } from "../Context";
import { CounterContext } from "../Context";

const Child = () => {
    const value = useContext(MyContext1)

    const counter = useContext(CounterContext)

    if (!counter) return null

    const { num, increment } = counter


    return (

        <>

            <h1>{value}</h1>

            <h2>{num}</h2>

            <button onClick={increment}>num + 1</button>

        </>
    )

}

export default Child