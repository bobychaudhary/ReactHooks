import React, { useRef } from 'react';

const UseImperativeHandle = () => {
    const buttonRef = useRef(null);
    return (
        <>
        <button
        onClick={() => {
            buttonRef.current.alterToggle();
        }}
        >Button From Parent
        </button>
        <Button ref={buttonRef} />
        </>
    );
};
export default UseImperativeHandle;