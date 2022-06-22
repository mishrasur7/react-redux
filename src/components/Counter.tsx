import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../app/reducer/counterReducer";

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  const dispatch = useAppDispatch();
  const count = useSelector((state: RootState) => state.counterReducer.count);

  return (
    <div>
      <p>Count: {count}</p>
      <section>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </section>
      <input 
        type="text"
        value={incrementAmount}
        onChange={(e:any) => setIncrementAmount(e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Add amount</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
