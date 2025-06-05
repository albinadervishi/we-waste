const SkipCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 animate-pulse">
      <div className="flex flex-col md:flex-row items-start md:items-center p-6 min-h-[200px] gap-4">
        <div className="flex-1 flex flex-col gap-4 items-start w-full">
          <div className="flex flex-row items-center gap-3">
            <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-24"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-16"></div>
          </div>
          <div className="h-9 bg-gray-300 dark:bg-gray-600 rounded w-20"></div>
          <div className="flex flex-col gap-2">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-32"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-28"></div>
          </div>
        </div>
        <div className="w-full md:w-44 h-36 bg-gray-300 dark:bg-gray-600 rounded-xl"></div>
      </div>
    </div>
  );
};

export default SkipCardSkeleton;
