import React, { useEffect, useLayoutEffect, useRef } from "react";

const Layouteffect = () => {
  const inputRef = useRef(null);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "Hello";
  }, []);
  return (
    <>
      <input
        ref={inputRef}
        value="Boby"
        style={{ width: 500, height: 250, borderRadius: 10, fontSize: 40 }}
      ></input>
    </>
  );
};
export default Layouteffect;
