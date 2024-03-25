import React from "react";

const UserComp = ({ id, name, dob, role }) => {
  return (
    <div className="bg-gray-600 w-64 p-4 rounded-2xl">
      <div className="flex gap-4">
        <p>Emp id :</p> <p className="text-green-500">{id}</p>
      </div>
      <div className="flex gap-4">
        <p>Name :</p> <p className="text-green-500">{name}</p>
      </div>
      <div className="flex gap-4">
        <p>DOB :</p> <p className="text-green-500">{dob}</p>
      </div>
      <div className="flex gap-4">
        <p>Role :</p> <p className="text-green-500">{role}</p>
      </div>
    </div>
  );
};

export default UserComp;
