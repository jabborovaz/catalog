import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { getItems, setPage } from "../../reducer/Catalogues";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import { capitalizeFirstLetter } from "../../global/GlobalFunctions";
import { Pagination } from "antd";

function Catalogues() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { page, items, loading } = useSelector(
    ({ cataloguesState }) => cataloguesState
  );

  const handlePagination = (page) => {
    dispatch(setPage(page));
    document.location.href = "#top";
  };

  useEffect(() => {
    dispatch(getItems(page));
  }, [dispatch, page]);
  return (
    <>
      {loading && <Loader />}
      <div className="my-10 w-[85%] max-w-[1300px] mx-auto flex flex-col space-y-5">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 ">
          {items &&
            items?.map((elem, index) => {
              return (
                <Card
                  key={index}
                  title={capitalizeFirstLetter(elem.title)}
                  imagePath={elem.url}
                  itemKey={index}
                  handleClick={() => navigate(`/${elem.id}`)}
                />
              );
            })}
        </div>
        <div className="w-full flex flex-row justify-end">
          <Pagination
            current={page}
            total={items?.length}
            onChange={handlePagination}
            showSizeChanger={false}
          />
        </div>
      </div>
    </>
  );
}

export default Catalogues;
