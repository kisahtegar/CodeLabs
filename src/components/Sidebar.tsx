import { useState, useEffect } from "react";
import { useFilter } from "./FilterContext";

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[];
}

const Sidebar = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    setKeyword,
  } = useFilter();

  // Local state for storing fetched categories
  const [categories, setCategories] = useState<string[]>([]);

  // Predefined keywords for quick filtering
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "Fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  /**
   * useEffect hook to fetch product categories from an API.
   * Runs once when the component is mounted.
   */
  useEffect(() => {
    /**
     * Fetches categories from the product API and sets unique categories to state.
     */
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await response.json();

        // Extract unique categories from product data
        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        setCategories(uniqueCategories); // Update state with unique categories
      } catch (error) {
        console.error("Error fetching products:", error); // Handle fetch error
      }
    };

    fetchCategories(); // Trigger the data fetching function
  }, []);

  /**
   * Updates the selected category in the global filter context.
   * @param category The category selected by the user.
   */
  const handleRadioChangeCategories = (category: string) => {
    setSelectedCategory(category);
  };

  /**
   * Updates the keyword filter in the global filter context.
   * @param keyword The keyword selected by the user.
   */
  const handleKeywordClick = (keyword: string) => {
    setKeyword(keyword);
  };

  /**
   * Resets all filters: search query, category, price range, and keyword.
   */
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setKeyword("");
  };

  /**
   * Updates the minimum price in the global filter context.
   * Parses the input value to a number or sets it to undefined if empty.
   * @param e Input change event for the minimum price field.
   */
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };

  /**
   * Updates the maximum price in the global filter context.
   * Parses the input value to a number or sets it to undefined if empty.
   * @param e Input change event for the maximum price field.
   */
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value ? parseFloat(value) : undefined);
  };

  return (
    <div className="w-64 p-5 h-screen">
      <h1 className="text-2xl font-bold mb-10 mt-4">React Store</h1>

      <section>
        <input
          type="text"
          className="border-2 rounded px-2 p-2 sm:mb-0"
          placeholder="Search Product"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex justify-center items-center">
          <input
            type="number"
            className="border-2 mr-2 px-5 py-3 mb-3 w-full"
            placeholder="Min"
            value={minPrice ?? ""}
            onChange={handleMinPriceChange}
          />
          <input
            type="number"
            className="border-2  px-5 py-3 mb-5 mt-2 w-full"
            placeholder="Max"
            value={maxPrice ?? ""}
            onChange={handleMaxPriceChange}
          />
        </div>

        {/* Categories Section */}
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Categories</h2>
          <div>
            {categories.map((category, index) => (
              <label key={index} className="block mb-2">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  onChange={() => handleRadioChangeCategories(category)}
                  checked={selectedCategory === category}
                  className="mr-2 w-[16px] h-[16px]"
                />
                {category.toUpperCase()}
              </label>
            ))}
          </div>
        </div>

        {/* Keywords Section */}
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Keywords</h2>
          <div>
            {keywords.map((keyword, index) => (
              <button
                key={index}
                onClick={() => handleKeywordClick(keyword)}
                className="block mb-2 px-4 py-2 w-full text-left border rounded hover:bg-gray-200"
              >
                {keyword.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleResetFilters}
          className="w-full mb-[4rem] py-2 bg-black text-white rounded mt-5"
        >
          Reset Filters
        </button>
      </section>
    </div>
  );
};

export default Sidebar;
