import { ResetButton } from ".";
import { useGameContext } from "../provider/game-provider";

export const OverView = () => {
  const { xIsNext, player, winner } = useGameContext();

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? player : player === "X" ? "O" : "X"}`;

  return (
    <div className="flex justify-between items-center mb-4 ">
      <h3 className="text-xl 2xl:text-3xl font-semibold text-center text-gray-700">
        {status}
      </h3>
      <ResetButton />
    </div>
  );
};
