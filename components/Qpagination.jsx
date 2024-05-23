import React, { useState, useEffect } from "react";

export default function Qpagination({
  allData: { pagesekarang, totalpage, page },
  allFunction: { prevPage, gotoPage, nextPage, startPage, lastPage },
  hover,
  portrait,
}) {
  const newhover = hover && hover.map((value, index) => `hover:${value}`);
  const newportrait =
    portrait && portrait.map((value, index) => `portrait:${value}`);

  return (
    <div
      className={`
          ${newhover && newhover.join(" ")} 
          ${newportrait && newportrait.join(" ")} 
          w-[70vw] h-[12vh] text-[12px] flex flex-col items-center font-bold bg-white rounded shadow overflow-hidden`}
    >
      <div className="flex justify-center items-center w-full h-[35px] text-white bg-teal-500 text-center">{`{ menu halaman }`}</div>
      <hr className="my-1" />
      <div className="w-full px-2">
        <div className="flex justify-center items-center gap-1">
          {pagesekarang !== 1 ? (
            <button
              className="bg-teal-300 w-[120px] h-[30px] box-border flex justify-center items-center rounded hover:text-yellow-50 transition-all duration-200 ease-in-out hover:scale-95"
              onClick={prevPage}
            >
              prev
            </button>
          ) : (
            <button
              className="bg-teal-400 w-[120px] h-[30px] box-border flex justify-center items-center text-white rounded hover:text-yellow-50 transition-all duration-200 ease-in-out hover:scale-95"
              onClick={lastPage}
            >
              {`<-`} to end
            </button>
          )}

          {page.map((value, index) => (
            <button
              key={value}
              className={`w-[50px] h-[30px] flex justify-center items-center rounded transition-all duration-150 ease-in-out hover:scale-90 ${
                pagesekarang == value
                  ? "bg-teal-500 text-yellow-50"
                  : "bg-teal-100"
              }`}
              onClick={() => gotoPage(value)}
            >
              {value}
            </button>
          ))}
          {pagesekarang !== totalpage ? (
            <button
              className="bg-green-300 w-[100px] h-[30px] flex justify-center items-center rounded hover:text-yellow-50 transition-all duration-200 ease-in-out hover:scale-95"
              onClick={nextPage}
            >
              next
            </button>
          ) : (
            <button
              className="bg-green-400 w-[100px] h-[30px] flex justify-center items-center text-white rounded hover:text-yellow-50 transition-all duration-200 ease-in-out hover:scale-95"
              onClick={startPage}
            >
              to start {`->`}
            </button>
          )}
        </div>
      </div>
      <hr className="my-1" />
    </div>
  );
}
