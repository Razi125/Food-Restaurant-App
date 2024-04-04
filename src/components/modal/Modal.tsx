import React from "react";

interface ModalProps {
  item: any
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  const handleClick = () => {
    onClose(); // Call onClose when the close button is clicked
  };

  return (
    <div className="fixed inset-0 z-50 flex mt-10 lg:mt-0  lg:items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white h-fit p-8 rounded-lg max-w-2xl relative">
        <button onClick={handleClick} className="text-2xl m-2 absolute -top-1 right-2 text-red-500">
          x
        </button>
        <div className="flex flex-col md:flex-row">
          <div className="w-1/4 md:w-1/2">
            <img src={item.imageUrl} alt={item.name} className="rounded-lg mb-4" style={{ maxHeight: "300px", objectFit: "cover" }} />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
            <p className="text-lg mb-4">Restaurant: {item.restaurant}</p>
            <p className="text-lg mb-4">Food Name: {item.name}</p>
            <p className="text-lg mb-4">Rating: {item.rating}</p>
            <p className="text-lg mb-4">Cook Time: {item.minCookTime}-{item.maxCookTime} min</p>
            {item.promotion && (
              <p className="text-lg mb-4">{item.promotion}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
