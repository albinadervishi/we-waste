import { CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "../utils";
import { Skip } from "../types";

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: () => void;
  delay: number;
}

export default function SkipCard({
  skip,
  isSelected,
  onSelect,
  delay,
}: SkipCardProps) {
  const totalPrice = Math.round(skip.price_before_vat * (1 + skip.vat / 100));

  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 rounded-2xl overflow-hidden transition-all duration-300 border-2 cursor-pointer group hover:shadow-xl animate-in slide-in-from-bottom-4",
        isSelected
          ? "border-green-500 dark:border-green-400 shadow-lg scale-105 dark:shadow-green-400/20"
          : "border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600"
      )}
      style={{ animationDelay: `${delay}ms` }}
      onClick={onSelect}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center p-6 min-h-[200px] gap-4">
        <div className="flex-1 flex flex-col gap-4 items-start">
          <div className="flex flex-row items-center gap-3">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300">
              {skip.size} Yard
            </h3>
            <div className="bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-xs font-medium px-3 py-1 rounded-full w-fit transition-colors duration-300">
              {skip.hire_period_days} days
            </div>
          </div>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400 transition-colors duration-300">
            £{totalPrice}
          </p>

          <div className="flex flex-row md:flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 text-sm">
              {skip.allowed_on_road ? (
                <>
                  <CheckCircle
                    className="text-green-500 dark:text-green-400 transition-colors duration-300"
                    size={16}
                  />
                  <span className="text-green-600 dark:text-green-400 font-medium transition-colors duration-300">
                    Road OK
                  </span>
                </>
              ) : (
                <>
                  <AlertCircle
                    className="text-orange-500 dark:text-orange-400 transition-colors duration-300"
                    size={16}
                  />
                  <span className="text-orange-600 dark:text-orange-400 font-medium transition-colors duration-300">
                    Private land only
                  </span>
                </>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm">
              {skip.allows_heavy_waste ? (
                <>
                  <CheckCircle
                    className="text-green-500 dark:text-green-400 transition-colors duration-300"
                    size={16}
                  />
                  <span className="text-green-600 dark:text-green-400 font-medium transition-colors duration-300">
                    Heavy waste
                  </span>
                </>
              ) : (
                <>
                  <AlertCircle
                    className="text-orange-500 dark:text-orange-400 transition-colors duration-300"
                    size={16}
                  />
                  <span className="text-orange-600 dark:text-orange-400 font-medium transition-colors duration-300">
                    Light waste only
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full md:w-44 h-36">
          <img
            src={skip.image}
            alt={`${skip.size} yard skip`}
            className="object-cover h-full w-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
