import React, { useState } from "react";
import countries from "./countries.json";
import { useCity } from "../context/CityContextProvider";
import { Link } from "react-router-dom";

const CityInput = () => {
  const { changeCity } = useCity();
  const [input, setInput] = useState("");

  return (
    <div className=" flex flex-col items-center mt-4">
      <form className="flex flex-col items-center">
        <div className="flex max-w-[80vw]">
          <input
            placeholder="Enter a city"
            className="  px-5 py-4 border-2 border-blue-300 sm:rounded-l-full sm:rounded-none rounded-full w-[60vw] focus:outline-none text-blue-500 text-lg font-semibold"
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <select className="hidden sm:flex px-5 py-4 border-l-0 border-2 px border-blue-300 rounded-r-full  focus:outline-none text-blue-500 text-lg font-semibold  w-[30vw] appearance-none">
            <option value="" defaultValue={""}>
              Select a country
            </option>
            {countries.map((country) => (
              <option key={country["alpha-2"]} value={country["alpha-2"]}>
                {country.name}, {country["alpha-2"]}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            changeCity(input);
          }}
          className="bg-sky-500 px-8 text-lg font-semibold py-3 text-white rounded-full  mt-3 hover:bg-sky-600 transition"
        >
          <Link to={"/details"}>Get Details</Link>
        </button>
      </form>
    </div>
  );
};

export default CityInput;
