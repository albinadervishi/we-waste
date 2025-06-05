import React from "react";
import { ArrowRight, Truck, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "../utils";
import { Skip } from "../types";

interface SelectedSkipFooterProps {
  selectedSkip: Skip | null;
  isVisible: boolean;
  onContinue: () => void;
}

const SelectedSkipFooter: React.FC<SelectedSkipFooterProps> = ({
  selectedSkip,
  isVisible,
  onContinue,
}) => {
  const calculateTotalPrice = (priceBeforeVat: number, vat: number) => {
    return Math.round(priceBeforeVat * (1 + vat / 100));
  };

  if (!selectedSkip) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-2xl transition-all duration-500 ease-out",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start md:items-center gap-4 w-full md:w-auto">
            <div className="bg-green-100 dark:bg-green-500/20 p-3 rounded-full transition-colors duration-300">
              <Truck
                className="text-green-600 dark:text-green-400 transition-colors duration-300"
                size={24}
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 transition-colors duration-300">
                {selectedSkip.size} Yard Skip
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                <span>{selectedSkip.hire_period_days} day hire</span>
                <div className="flex items-center gap-2">
                  {selectedSkip.allowed_on_road ? (
                    <>
                      <CheckCircle
                        className="text-green-500 dark:text-green-400 transition-colors duration-300"
                        size={16}
                      />
                      <span className="dark:text-gray-400">Road Placement</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle
                        className="text-orange-500 dark:text-orange-400 transition-colors duration-300"
                        size={16}
                      />
                      <span className="dark:text-gray-400">
                        Private Land Only
                      </span>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {selectedSkip.allows_heavy_waste ? (
                    <>
                      <CheckCircle
                        className="text-green-500 dark:text-green-400 transition-colors duration-300"
                        size={16}
                      />
                      <span className="dark:text-gray-400">Heavy Waste OK</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle
                        className="text-orange-500 dark:text-orange-400 transition-colors duration-300"
                        size={16}
                      />
                      <span className="dark:text-gray-400">
                        Light Waste Only
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <div className="text-right">
              <p className="text-2xl font-bold text-green-600 dark:text-green-400 transition-colors duration-300">
                £
                {calculateTotalPrice(
                  selectedSkip.price_before_vat,
                  selectedSkip.vat
                )}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                Inc. VAT
              </p>
            </div>
            <button
              onClick={onContinue}
              className="px-6 py-3 bg-green-600 dark:bg-green-500 text-white rounded-lg flex items-center gap-2 hover:bg-green-700 dark:hover:bg-green-600 transition-colors duration-300"
            >
              Continue
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedSkipFooter;
