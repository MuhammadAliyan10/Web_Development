import React, { useMemo, useState } from "react";
const dataA = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000_000,
  };
});
const Memo = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(dataA);

  const magicalNumber = useMemo(
    () => data.find((item) => item.isMagical == true),
    []
  );
  return (
    <div>
      <h2>{magicalNumber.index}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count is {count}
      </button>
    </div>
  );
};

export default Memo;
