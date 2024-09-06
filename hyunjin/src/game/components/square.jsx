export const Square = ({ value, onClick }) => {
  return (
    <button
      className="bg-white border border-gray-400 float-left text-2xl font-bold leading-8 h-8 w-8 m-0 p-0 text-center"
      onClick={onClick}
    >
      {value}
    </button>
  );
};
