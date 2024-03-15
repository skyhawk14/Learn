import { useState } from "react";

const UseStateCustomHook = () => {
  const [num, setNum] = useState<number>(0);
  return (
    <div>
      {num}
      <button
        className="ml-2 border-2 p-2 cursor-pointer"
        onClick={() => setNum((n) => n + 1)}
      >
        Increase Number
      </button>
    </div>
  );
};

export default UseStateCustomHook;
