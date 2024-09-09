export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500" />
        <p className="text-2xl font-semibold text-blue-500">
          상대방이 생각중입니다.
        </p>
      </div>
    </div>
  );
};
