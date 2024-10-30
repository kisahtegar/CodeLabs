import { createContext, useContext, useState, ReactNode } from "react";

/**
 * Defines the structure of the filter context.
 */
interface FilterContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  minPrice: number | undefined;
  setMinPrice: (price: number | undefined) => void;
  maxPrice: number | undefined;
  setMaxPrice: (price: number | undefined) => void;
  keyword: string;
  setKeyword: (keyword: string) => void;
}

/**
 * Creates a context to hold the filter-related state.
 *
 * Provides filtering data and methods to manage filters (search, category, price, etc.)
 */
const FilterContext = createContext<FilterContextType | undefined>(undefined);

/**
 * Provides the filter context to components that need it.
 *
 * Manages all the filter-related state including search queries, categories, prices, and keywords.
 *
 * @param children The components that will consume the filter context.
 * @returns A FilterContext provider that wraps its children.
 */
export const FilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Filter states
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [keyword, setKeyword] = useState<string>("");

  return (
    <FilterContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        keyword,
        setKeyword,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

/**
 * A custom hook that provides access to the filter context.
 *
 * @throws Error if used outside of the `FilterProvider`.
 * @returns The current filter state and setter functions.
 */
export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
