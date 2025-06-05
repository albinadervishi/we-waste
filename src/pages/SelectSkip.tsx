"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  MapPin,
  Trash2,
  Truck,
  FileCheck,
  Calendar,
  CreditCard,
  CheckCircle,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { cn } from "../utils";
import { useGetSkips } from "../hooks/useGetSkips";
import {
  SkipCardSkeleton,
  SelectedSkipFooter,
  ThemeToggle,
  ProgressStep,
  SkipCard,
} from "../components";

export const SkipSelectionPage = () => {
  const [selectedSkip, setSelectedSkip] = useState<number | null>(null);

  const {
    data: skips,
    isLoading,
    error,
    isError,
  } = useGetSkips({
    postcode: "NR32",
    area: "Lowestoft",
  });

  const handleSkipSelection = (skipId: number) => {
    setSelectedSkip((prevSelected) =>
      prevSelected === skipId ? null : skipId
    );
  };

  const selectedSkipData = skips?.find((skip) => skip.id === selectedSkip);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm py-6 sm:py-3 border-b border-green-100 dark:border-gray-700 sticky top-0 z-10 transition-colors duration-300">
        <div className="absolute top-2 right-4">
          <ThemeToggle />
        </div>

        <div className="block sm:hidden px-4 ">
          <div className="flex items-center gap-2 justify-center">
            {[1, 2, 3, 4, 5, 6].map((step) => (
              <div
                key={step}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors duration-300",
                  step <= 3
                    ? "bg-green-500 dark:bg-green-400"
                    : "bg-gray-300 dark:bg-gray-700"
                )}
              />
            ))}
          </div>
        </div>

        <div className="hidden sm:flex flex-wrap justify-between items-center max-w-4xl mx-auto px-4 pr-16">
          <ProgressStep
            icon={<MapPin />}
            label="Postcode"
            isActive
            isCompleted
          />
          <ProgressStep
            icon={<Trash2 />}
            label="Waste Type"
            isActive
            isCompleted
          />
          <ProgressStep icon={<Truck />} label="Select Skip" isActive />
          <ProgressStep icon={<FileCheck />} label="Permit Check" />
          <ProgressStep icon={<Calendar />} label="Choose Date" />
          <ProgressStep icon={<CreditCard />} label="Payment" />
        </div>
      </header>

      <div className="p-6 sm:px-10 sm:py-6 w-full mx-auto flex flex-col items-center gap-10 ">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3 transition-colors duration-300">
            Choose Your Skip Size
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-300">
            Select the perfect skip for your waste disposal needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          {isLoading
            ? Array.from({ length: 6 }, (_, index) => (
                <SkipCardSkeleton key={index} />
              ))
            : skips?.map((skip, index) => (
                <SkipCard
                  key={skip.id}
                  skip={skip}
                  isSelected={selectedSkip === skip.id}
                  onSelect={() => handleSkipSelection(skip.id)}
                  delay={index * 100}
                />
              ))}
        </div>
      </div>

      <SelectedSkipFooter
        selectedSkip={selectedSkipData || null}
        isVisible={!!selectedSkip}
        onContinue={() => {
          console.log("continue");
        }}
      />
    </div>
  );
};
