import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);

  // Increment Function
  const increment = () => {
    setCounter(counter + 1);
  };

  // Decrement Function
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div
      className={
        counter > 4 ? "container bg-red-500" : "container bg-green-100"
      }>
      {/* Alert Card */}
      <div
        className={
          counter > 4
            ? "alertContainer -translate-y-12 opacity-1"
            : "alertContainer translate-y-12 opacity-0"
        }>
        <p>Due to COVID-19 only groups of 4 are allowed.</p>
      </div>
      {/* Card */}

      <div className={counter > 4 ? "card bg-red-400 -translate-y-4  " : "card"}>
        {/* Top Section */}
        <div className=' px-12 py-6 flex items-center justify-center h-60 w-[500px] '>
          {/* Table */}
          <div className='w-20 h-20 rounded-full bg-white relative'></div>
        </div>

        {/* Bottom Sectiom */}

        <div className=' px-12 bg-white py-10 flex items-center justify-between rounded-b-md '>
          <p>For how many people !</p>

          <div className='flex space-x-6 items-center  overflow-hidden'>
            <button
              onClick={decrement}
              className={
                counter > 1 ? " button translate-y-0" : "button translate-y-8"
              }>
              {" < "}
            </button>
            <p>{counter}</p>
            <button
              onClick={increment}
              className={counter > 4 ? "button translate-y-8" : "button"}>
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
