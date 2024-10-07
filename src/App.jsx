import React, { useState } from "react";
import productList from "./data.js";

const App = () => {
  const [active, setactive] = useState("all");

  const [filterpro, setfilterpro] = useState(productList);

  const filterProduct = (items) => {
    setactive(items);
    if (items === "all") {
      setfilterpro(productList);
    } else {
      const filterItem = productList.filter((item) => item.category === items);
      setfilterpro(filterItem);
    }
  };

  console.log(active);
  return (
    <section className="  w-full flex flex-col items-center justify-center gap-3 p-7 ">
      <div className=" w-full flex items-center justify-center gap-3 bg-slate-300 ">
        <button
          className={` text-xl font-bold   ${
            active === "all" ? "green-200 " : " "
          } `}
          onClick={() => filterProduct("all")}
        >
          {" "}
          All{" "}
        </button>

        <button
          className={` text-xl font-bold   ${
            active === " women's clothing " ? "green-500 " : " "
          } `}
          onClick={() => filterProduct("women's clothing")}
        >
          {" "}
          Women{" "}
        </button>
        <button
          className={` text-xl font-bold   ${
            active === " Men's clothing " ? "green-500 " : " "
          } `}
          onClick={() => filterProduct("men's clothing")}
        >
          {" "}
          Men{" "}
        </button>
        <button
          className={` text-xl font-bold   ${
            active === "electronics " ? "green-500 " : " "
          } `}
          onClick={() => filterProduct("electronics")}
        >
          {" "}
          Electronic{" "}
        </button>
        <button
          className={` text-xl font-bold  ${
            active === "jewelery" ? "green-500 " : " "
          } `}
          onClick={() => filterProduct("jewelery")}
        >
          {" "}
          jewelery{" "}
        </button>
      </div>

      <div className=" w-full flex flex-wrap items-center justify-center gap-2 ">
        {filterpro.length > 0
          ? filterpro.map((item) => (
              <div className="w-[24%] bg-slate-300 rounded-md p-4 flex flex-col items-center justify-center gap-2 ">
                <div className=" w-full h-[160px]">
                  <img
                    className=" w-full h-full object-contain"
                    src={item.image}
                    alt=""
                  />
                </div>
              </div>
            ))
          : " "}
      </div>
    </section>
  );
};

export default App;
