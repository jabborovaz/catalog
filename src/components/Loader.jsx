import React from "react";
import { Spin } from "antd";

function Loader() {
  return (
    <div className="w-full flex flex-row justify-center h-screen items-center">
      <Spin size="large" />
    </div>
  );
}

export default Loader;
