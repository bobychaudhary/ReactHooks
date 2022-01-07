import React, { useEffect } from "react";
import axios from "axios";

const UseEffect1 = () => {
  const [data, setData] = useState(" ");
  const [count, setCount] = useState(1);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data[0].email);
      console.log("hello");
    }, []);
  });
  return (
    <>
      Hello there!
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      ></button>
    </>
  );
};
export default UseEffect1;
