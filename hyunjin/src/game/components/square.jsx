export const Square = ({ value, onClick }) => {
  return (
    <button
      className="bg-white border border-gray-400 text-4xl h-36 sm:text-9xl font-bold sm:h-48 w-1/3 m-0 p-0 text-center"
      onClick={onClick}
    >
      {value}
    </button>
  );
};
