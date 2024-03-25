import React, { useState } from "react";
import UserComp from "./UserComp";

const MainScreen = () => {
  const [toggle, settoggle] = useState(false);

  function handleClick() {
    settoggle(!toggle);
  }
  return toggle ? (
    <div className="bg-black gap-6 h-screen flex items-center  flex-col">
      <button onClick={handleClick} className="absolute right-4 ">
        <img className="h-14" src="../Page1/Group46.png" />
      </button>
      <img className="h-24 mt-16" src="../Page1/moptrologo.png" />
      <input type="text" placeholder="search here" className="input"></input>
      <div>
        <div>
          <div className="flex gap-4">
            <p>Productivity on Monday</p> <p className="text-green-500">92%</p>
          </div>
          <progress
            value={92}
            max={100}
            className="bg-gray-600 text-green-500"
          ></progress>
        </div>
        <div>
          <div className="flex gap-4">
            <p>Productivity on Tuesday</p> <p className="text-green-500">92%</p>
          </div>
          <progress
            value={92}
            max={100}
            className="bg-gray-600 text-green-500"
          ></progress>
        </div>
        <div>
          <div className="flex gap-4">
            <p>Productivity on Wednesday</p>{" "}
            <p className="text-green-500">92%</p>
          </div>
          <progress
            value={92}
            max={100}
            className="bg-gray-600 text-green-500"
          ></progress>
        </div>
        <div>
          <div className="flex gap-4">
            <p>Productivity on Thrusday</p>{" "}
            <p className="text-green-500">92%</p>
          </div>
          <progress
            value={92}
            max={100}
            className="bg-gray-600 text-green-500"
          ></progress>
        </div>
        <div>
          <div className="flex gap-4">
            <p>Productivity on Friday</p> <p className="text-green-500">92%</p>
          </div>
          <progress
            value={92}
            max={100}
            className="bg-gray-600 text-green-500"
          ></progress>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-black gap-6 h-screen flex items-center  flex-col">
      <button onClick={handleClick} className="absolute right-4 ">
        <img className="h-14" src="../Page1/Group46.png" />
      </button>
      <img className="h-24 mt-16" src="../Page1/moptrologo.png" />
      <input type="text" placeholder="search here" className="input"></input>
      <div className="flex flex-col gap-4">
        <button onClick={handleClick}>
          <UserComp id="1" name="Aman" dob="12 April 2003" role="CEO" />
        </button>
        <button onClick={handleClick}>
          <UserComp id="2" name="Vicky" dob="14 April 2003" role="COO" />
        </button>
      </div>
    </div>
  );
};

export default MainScreen;
