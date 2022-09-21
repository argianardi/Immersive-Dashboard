import React from "react";

const Inputmodal = ({ label }) => {
  return (
    <div className="mb-2">
      <h1 className="mb-1 font-semibold text-[15px]">{label}</h1>
      <input
        className="w-full rounded-full border-[1px] px-2 py-[1px] bg-white border-[#1B345F]"
        type="text"
        placeholder="Input name of new user"
      />
    </div>
  );
};

export default Inputmodal;
