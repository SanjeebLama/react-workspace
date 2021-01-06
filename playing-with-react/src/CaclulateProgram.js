import React, { useState } from "react";

function CaclulateProgram(props) {
  const [count, setCount] = useState(0);
  //   const[reset,setReset]=useState(0)

  return (
    <div>
      <h1>This is react stateless component</h1>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment Button</button>
      <br />
      <button onClick={() => setCount(count - 1)}>Decrement Button</button>
      <br />
    </div>
  );
}

export default CaclulateProgram;
