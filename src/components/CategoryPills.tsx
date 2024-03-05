import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";
import { useEffect, useRef, useState } from "react";

type CategoryPillProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

const TRANSLATE_AMOUNT

export function CategoryPills({
  categories,
  selectedCategory,
  onSelect,
}: CategoryPillProps) {
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  return (
    <div className="owerflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]"></div>
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onSelect(category)}
          variant={selectedCategory === category ? "dark" : "default"}
          className="py-1 px-3 rounded-lg whitespace-nowrap"
        >
          {category}
        </Button>
      ))}
      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-20% to-transparent w-24 h-full">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-squere w-auto p-1.5"
          >
            {" "}
            <ChevronLeft />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-20% to-transparent w-24 h-full flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-squere w-auto p-1.5"
          >
            {" "}
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}
