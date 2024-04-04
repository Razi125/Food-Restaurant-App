import React, { useState } from "react";
import Categories from '../data/categories.json'
import FoodCards from '../FoodCard/index.tsx'

interface Props {
  searchValue: string;
}

const Index: React.FC<Props> = ({ searchValue }) => {
  const initialSelectedTab = { name: "All", id: "all" };
  const [selectedTab, setSelectedTab] = useState<{ name: string, id: string }>(initialSelectedTab);

  const handleClick = (name: string, id: string): void => {
  setSelectedTab({ name, id });
};

  return (
    <>
      <div className="mx-2 lg:mx-0 w-[95%]  md:w-[90%] lg:w-[58%] flex items-center justify-start mt-10 border border-yellow-500 rounded-2xl overflow-hidden">
        <button
          key={initialSelectedTab.id}
          className={`flex-1 py-2 px-4 text-center sm:text-sm md:text-lg ${
            initialSelectedTab.name === selectedTab.name
              ? 'bg-yellow-500 text-black'
              : 'bg-transparent text-yellow-500'
          } rounded-l-2xl border-l border-yellow-500 focus:outline-none`}
          onClick={() => handleClick(initialSelectedTab.name, initialSelectedTab.id)}
        >
          {initialSelectedTab.name}
        </button>
        {Categories.map((category, index) => (
          <button
            key={category.id}
            className={`flex-1 py-2 px-4 text-center text-[10px] md:text-lg ${
              category.name === selectedTab.name
                ? 'bg-yellow-500 text-black'
                : 'bg-transparent text-yellow-500'
            } ${index === Categories.length - 1 ? 'rounded-r-2xl border-l border-yellow-500' : 'border-l border-yellow-500'} focus:outline-none`}
            onClick={() => handleClick(category.name, category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <FoodCards selectedTabId={selectedTab.id === "all" ? null : selectedTab.id} searchValue={searchValue} />
    </>
  );
}
export default Index;
