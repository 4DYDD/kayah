import React, { useState, useEffect } from "react";
import Axios from "axios";
import Qmenu from "../components/Qmenu";
import Qpagination from "../components/Qpagination";
import datanya from "../datanya.json";

function App() {
  const [pagesekarang, setPageSekarang] = useState(1);
  const [pagenumber, setPagenumber] = useState(3);
  const [data, setData] = useState(datanya);
  const [page, setPage] = useState([1, 2, 3]);

  const recordsperpage = 10;
  const lastIndex = recordsperpage * pagesekarang;
  const firstIndex = lastIndex - recordsperpage;
  const records = data.slice(firstIndex, lastIndex);
  const totalpage = Math.ceil(data.length / recordsperpage);

  const allData = {
    pagesekarang,
    pagenumber,
    data,
    recordsperpage,
    lastIndex,
    firstIndex,
    records,
    totalpage,
    page,
  };
  const allFunction = {
    prevPage: () => {
      let newpage = page.slice();

      if (pagesekarang !== 1) {
        setPageSekarang(pagesekarang - 1);
        if (pagesekarang < newpage[0] + 1) {
          setPage(newpage.map((value, index) => value - 1));
        }
      }
    },
    gotoPage: (page) => {
      setPageSekarang(page);
    },
    nextPage: () => {
      const { totalpage } = allData;
      let newpage = page.slice();

      if (pagesekarang !== totalpage) {
        setPageSekarang(pagesekarang + 1);
        if (pagesekarang > newpage[newpage.length - 1] - 1) {
          setPage(newpage.map((value, index) => value + 1));
        }
      }
    },
    startPage: () => {
      const newpage = page.slice();
      const selisih = pagesekarang - 3;

      setPage(newpage.map((value, index) => value - selisih));
      setPageSekarang(1);
    },
    lastPage: () => {
      const { totalpage } = allData;
      const newpage = page.slice();
      const selisih = 1 + totalpage - 4;

      setPage(newpage.map((value, index) => value + selisih));
      setPageSekarang(totalpage);
    },
  };

  return (
    <section
      className="h-[100vh] p-2 bg-teal-50 flex items-center flex-col"
      style={{ fontFamily: "Quicksand" }}
    >
      <div className="w-full h-[10vh] mb-[10px] flex justify-center items-center bg-teal-500 text-white rounded font-bold">
        Website Al-Qur'an
      </div>

      <Qmenu allData={allData} />
      <Qpagination
        allData={allData}
        allFunction={allFunction}
        portrait={["w-[93.5vw]", "text-[10px]"]}
      />
    </section>
  );
}

export default App;
