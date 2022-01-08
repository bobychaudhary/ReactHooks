import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.focus();
    alert(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <>
      <h1>Boby</h1>
      <input type="text" placeholder="Example.." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </>
  );
};
export default UseRef;
