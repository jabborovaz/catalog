import React from "react";

function Card({ title, imagePath, itemKey, handleClick = () => {} }) {
  return (
    <div
      onClick={handleClick}
      className="w-full flex flex-col justify-between items-start h-[290px] p-5 rounded-[16px] bg-white shadow-lg cursor-pointer hover:scale-[101%] active:scale-[99%] transition-all ease-linear duration-150"
      key={itemKey}
    >
      <h2 className="text-center text-[18px] text-[#082f49] font-[400]">
        {title}
      </h2>
      <div className="w-[90%] h-[60%] mx-auto">
        <img
          className="h-full"
          width="100%"
          height="100%"
          src={imagePath}
          alt={`productPhoto-${itemKey}`}
        />
      </div>
    </div>
  );
}

export default Card;
