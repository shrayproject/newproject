import React from "react";

const ProductivityUser = ({ mon, tue, wed, thr, fri }) => {
  return (
    <div className="bg-black gap-6 h-screen flex items-center  flex-col">
      <div>
        <div className="flex gap-4">
          <p>Productivity on Monday</p> <p className="text-green-500">{mon}%</p>
        </div>
        <progress
          value={92}
          max={100}
          className="bg-gray-600 text-green-500"
        ></progress>
      </div>
      <div>
        <div className="flex gap-4">
          <p>Productivity on Tuesday</p>{" "}
          <p className="text-green-500">{tue}%</p>
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
          <p className="text-green-500">{wed}%</p>
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
          <p className="text-green-500">{thr}%</p>
        </div>
        <progress
          value={92}
          max={100}
          className="bg-gray-600 text-green-500"
        ></progress>
      </div>
      <div>
        <div className="flex gap-4">
          <p>Productivity on Friday</p> <p className="text-green-500">{fri}%</p>
        </div>
        <progress
          value={92}
          max={100}
          className="bg-gray-600 text-green-500"
        ></progress>
      </div>
    </div>
  );
};

export default ProductivityUser;
