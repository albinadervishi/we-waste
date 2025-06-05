import { cn } from "../utils";

interface ProgressStepProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  isCompleted?: boolean;
}

export default function ProgressStep({
  icon,
  label,
  isActive = false,
  isCompleted = false,
}: ProgressStepProps) {
  return (
    <div className="flex flex-col items-center w-1/6">
      <div
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300",
          isActive &&
            !isCompleted &&
            "bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 border-2 border-green-500 dark:border-green-400 scale-110",
          isCompleted &&
            "bg-green-500 dark:bg-green-400 text-white dark:text-gray-900",
          !isActive &&
            !isCompleted &&
            "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500"
        )}
      >
        {icon}
      </div>
      <span
        className={cn(
          "text-sm text-center transition-colors duration-300",
          isActive || isCompleted
            ? "text-green-600 dark:text-green-400 font-medium"
            : "text-gray-500 dark:text-gray-400"
        )}
      >
        {label}
      </span>
    </div>
  );
}
