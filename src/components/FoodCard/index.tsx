import React, { useState, useEffect } from "react";
import foodData from "../data/food.json";
import Modal from "../modal/Modal.tsx";

interface Food {
  name: string;
  imageUrl: string;
  rating: number;
  minCookTime: number;
  maxCookTime: number;
  restaurant: string;
  promotion: string | null;
}

interface Props {
  selectedTabId: string | null;
  searchValue: string;
}

const Index: React.FC<Props> = ({ selectedTabId, searchValue }) => {
  console.log("selectedTabId", selectedTabId);

  const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Food | null>(null);
  console.log("selectedItem",selectedItem);
  

  // 1. Filter data on base of categories
  // 2. Filter data on base of Restaurant name
  useEffect(() => {
    let filtered = foodData.foods;
    if (searchValue.trim() !== "") {
      let currentSearch = "";
      for (let i = 0; i < searchValue.length; i++) {
        currentSearch += searchValue[i];
        filtered = filtered.filter((item) =>
          item.restaurant.toLowerCase().startsWith(currentSearch.toLowerCase())
        );
      }
    } else if (selectedTabId !== null) {
      filtered = filtered.filter((item) => item.categoryId === selectedTabId);
    }
    setFilteredFoods(filtered);
  }, [selectedTabId, searchValue]);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);

  };

  return (
    <>
      <div className="flex flex-wrap my-6 mb-3 ">
        {filteredFoods
          .slice(0, showAll ? filteredFoods.length : 6)
          //Pagination
          // 1. In First render show 6 cards
          // 2. After click on show button all data apair
          .map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-2 ">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer">
                <div className="max-w-md mx-auto">
                  <div
                  onClick={()=>setSelectedItem(item)}
                    className="relative h-[180px] flex items-center"
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Gift icon on left */}

                    {item.promotion === "gift" ? (
                      <div className="absolute left-0 top-0 bg-gradient-to-br from-sky-400 to-sky-600 rounded-tl-2xl rounded-br-2xl p-1">
                        <svg
                          viewBox="0 0 512 512"
                          fill="none"
                          height="1.6em"
                          width="4em"
                        >
                          <path
                            fill="none"
                            stroke="white"
                            strokeLinecap="round"
                            strokeMiterlimit={10}
                            strokeWidth={32}
                            d="M256 104v56h56a56 56 0 10-56-56zM256 104v56h-56a56 56 0 1156-56z"
                          />
                          <path
                            fill="none"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={32}
                            d="M96 160 H416 A32 32 0 0 1 448 192 V240 A32 32 0 0 1 416 272 H96 A32 32 0 0 1 64 240 V192 A32 32 0 0 1 96 160 z"
                          />
                          <path
                            fill="none"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={32}
                            d="M416 272v144a48 48 0 01-48 48H144a48 48 0 01-48-48V272M256 160v304"
                          />
                        </svg>
                      </div>
                    ) : item.promotion === "1+1" ? (
                      <div className="w-[4em] h-[2em] absolute left-0 top-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-tl-2xl rounded-br-2xl p-1">
                        <p className="flex justify-center items-center text-white font-semibold text-lg">1+1</p>
                      </div>
                    ) :item.promotion === "discount" ? (
                      <div className="w-[4em] h-[2em] absolute left-0 top-0 bg-gradient-to-br from-red-500 to-red-600 rounded-tl-2xl rounded-br-2xl p-1">
                        <p className="flex justify-center items-center text-white font-semibold text-lg">%</p>
                      </div>
                    ):null}
                  </div>

                  <div className="p-2 sm:p-4">
                    <p className="font-bold text-gray-500 text-[18px] leading-7 mb-1">
                      {item.name}
                    </p>
                    <div className="flex space-x-2">
                      <div className="flex text-xs items-center justify-center text-gray-500 font-semibold bg-gray-100 rounded-sm px-3 py-1 space-x-2">
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/ios-glyphs/30/star--v1.png"
                          alt="star--v1"
                        />
                        <p>{item.rating}</p>
                      </div>
                      <div className="flex text-xs items-center justify-center text-gray-500 font-semibold bg-gray-100 rounded-sm px-3 py-1 space-x-2">
                        <p>
                          {item.minCookTime}-{item.maxCookTime} min
                        </p>
                      </div>
                      {
                        item.promotion === null ? (
                          <div className="flex text-xs items-center justify-center text-gray-500 font-semibold bg-gray-100 rounded-sm px-3 py-1 space-x-2">
                        <p className="text-sm text-green-500">
                          New
                        </p>
                      </div>
                        ): ''
                      }
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      {!showAll && (
        <div className="flex justify-center my-4">
          <button
            className=" border border-yellow-500 rounded-lg text-gray-500 font-bold py-2 px-4 "
            onClick={handleShowMore}
          >
            + Show More
          </button>
        </div>
      )}
      {showAll && (
        <div className="flex justify-center my-4">
          <button
            className="border border-yellow-500 rounded-lg text-gray-500 font-bold py-2 px-4"
            onClick={handleShowLess}
          >
            - Show Less
          </button>
        </div>
      )}
      {selectedItem && (
        <Modal item={selectedItem} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Index;
