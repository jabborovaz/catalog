import React from "react";

function Card({ title, imagePath, key }) {
  return (
    <div
      className="w-full flex flex-col space-y-4 items-start h-[260px] rounded-[16px] bg-white drop-shadow-xl cursor-pointer hover:scale-[104%] active:scale-[99%] transition-all ease-linear duration-150"
      key={key}
    >
      <h2>{title}</h2>
      <div>
        <img src={imagePath} alt={`productPhoto-${key}`} />
      </div>
    </div>
  );
}

export default Card;
