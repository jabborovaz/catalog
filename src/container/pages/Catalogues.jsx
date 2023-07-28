import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getItems, setPage } from "../../reducer/Catalogues";
import Card from "../../components/Card";
import { Pagination, Spin } from "antd";

function Catalogues() {
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const { page, items, loading } = useSelector(
    ({ cataloguesState }) => cataloguesState
  );

  const handlePagination = (page) => {
    dispatch(setPage(page));
  };

  useEffect(() => {
    dispatch(getItems(page));
    containerRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [dispatch, page]);
  return (
    <>
      {loading && <Spin tip="Loading..." />}
      <div className="my-10 w-[85%] max-w-[1300px] mx-auto flex flex-col space-y-5">
        <div ref={containerRef} className="w-full grid grid-cols-4 gap-7 ">
          {items &&
            items?.map((elem, index) => {
              return (
                <Card title={elem.title} imagePath={elem.url} key={index} />
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
