import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { jumpTo } from "../store";

const SelectHistory = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.game.history);
  const stepNumber = useSelector((state) => state.game.stepNumber);

  const handleSelectChange = (event) => {
    const selected = +event.target.value;
    dispatch(jumpTo(selected));
  };
  return (
    <div>
      <div>SelectHistory</div>
      <select value={stepNumber} onChange={handleSelectChange}>
        {history.map((step, move) => {
          const desc = move ? "Go to move #" + move : "Go to game start";
          return (
            <option key={move} value={move}>
              {desc}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectHistory;
