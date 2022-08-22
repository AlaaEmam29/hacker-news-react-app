import React from "react";
import { useGlobalContext } from "../Context/Context";

const Buttons = () => {
  const { handlePageChange, page, nbPages, loading } = useGlobalContext()
  return (
    <>
      <div className="text-center mb-0 mt-4">
        <button
          disabled={loading}
          className=" btn-color"
          onClick={() => handlePageChange(-1)}
        >
          Prev
        </button>
        <span className="text-center">{`${page + 1} of ${nbPages}`}</span>
        <button
          className=" btn-color"
          disabled={loading}
          onClick={() => handlePageChange(1)}
        >
          Next
        </button>
      </div>
    </>
  );
};
export default Buttons;
