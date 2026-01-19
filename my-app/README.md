
<img width="705" height="335" alt="Screenshot 2026-01-19 at 18 13 21" src="https://github.com/user-attachments/assets/4b324d95-8473-45d8-822e-9e2e222ae70e" />

**Counter.jsのソースコード**

import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("カウントが変更されました:", count);
  }, [count]); 

  return (
    <div>
      <h2>カウンター</h2>
      <p>カウント：{count}</p>

      <button onClick={() => setCount(count + 1)}>
        +1
      </button>

      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;

