import React, {useState} from 'react';

const StateTutorial = () => {
    const [count, setCount] = useState(1);

    return (
        <>
        
        <button onClick ={() => {setCount(count+1)}}>Increment</button>
        {count}
        <button onClick ={() => {setCount(count-1)}}>Decrement</button>

        </>
    )
}
export default StateTutorial;