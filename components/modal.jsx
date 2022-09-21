import React, { useState } from "react";
import Inputmodal from "./inputmodal";

const Modal = () => {
  const [datas, setDatas] = useState(["Name", "Class", "Status"]);
  return (
    <div className="py-[25px] px-[32px] bg-white w-[508px] h-[508px]">
      {datas.map((item, index) => {
        return (
          <div key={index}>
            <Inputmodal label={item} />
          </div>
        );
      })}
      <button>Cancel</button>
      <button className="bg-[#1B345F]">Add New</button>
    </div>
  );
};

export default Modal;
