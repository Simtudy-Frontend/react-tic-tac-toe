export const Square = ({ value, onClick }) => {
  return (
    <button
      className="bg-white border border-gray-400  text-9xl font-bold h-96 w-1/3 m-0 p-0 text-center"
      onClick={onClick}
    >
      {value}
    </button>
  );
};
