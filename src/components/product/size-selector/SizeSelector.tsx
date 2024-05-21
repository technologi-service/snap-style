import { Button } from "@/components/ui/button";
import type { Size } from "@/interfaces";

interface SizeSelectorProps {
  selectedSize: Size;
  availableSizes: Size[];
}

export const SizeSelector = ({
  availableSizes,
  selectedSize,
}: SizeSelectorProps) => {
  return (
    <div className="grid gap-4">
      <h3 className="text-lg font-medium">Selecciona tu talla</h3>
      <div className="flex items-center gap-4">
        {availableSizes.map((size) => (
          <Button
            key={size}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            style={{
              backgroundColor: selectedSize === size ? "#2563EB" : undefined,
              color: selectedSize === size ? "white" : undefined,
            }}
          >
            {size}
          </Button>
        ))}
      </div>
    </div>
  );
};
