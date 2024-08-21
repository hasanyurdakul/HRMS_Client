import React from "react";
import { GridLoader } from "react-spinners";

function CustomGridLoader() {
  return (
    <div className="col-span-12 row-span-full flex items-center justify-center w-[calc(100vw-2rem)] md:w-[calc(100vw-20rem)] h-[calc(100vh-8rem)]">
      <GridLoader color="#0063DB" size={50} margin={5} />
    </div>
  );
}

export default CustomGridLoader;
