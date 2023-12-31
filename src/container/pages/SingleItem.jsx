import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getOneItem } from "../../reducer/Catalog";
import { capitalizeFirstLetter } from "../../global/GlobalFunctions";

function SingleItem() {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const { singleItem } = useSelector(({ catalogState }) => catalogState);

  useEffect(() => {
    dispatch(getOneItem(itemId));
  }, [dispatch, itemId]);

  return (
    <>
      <div className="my-10 w-[85%] max-w-[1300px] mx-auto">
        <div className="w-full md:w-[90%] lg:w-[50%] mx-auto h-[430px] flex flex-col justify-between items-start bg-white rounded-[16px] p-6">
          <h2 className="text-[22px] m-0 font-[500] text-center w-[80%] mx-auto">
            {capitalizeFirstLetter(singleItem?.title)}
          </h2>

          <div className="w-full lg:w-[80%] mx-auto h-[75%]">
            <img
              width="100%"
              height="100%"
              className="h-full"
              src={singleItem?.url}
              alt={`item-${singleItem?.id}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleItem;
