import { useState } from 'react';

export default function ButtonState(props) {
    // state, function for change state
    const [counter, setCounter] = useState(1);

    function increment() {
        setCounter( counter + 1);
        console.log(counter);
    }

    return (
        <>
            <span>{counter}</span>
            <button onClick={increment}>{props.children}</button>
            <br/>
        </>
    )
}
