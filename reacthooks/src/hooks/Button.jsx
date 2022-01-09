import React, { forwardRef, useState } from "react";
import UseImperativeHandle from "./useimperativehandle";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  UseImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <butoon>Button From Chilid</butoon>
      (toggle && <span>Toggle</span>)
    </>
  );
});
