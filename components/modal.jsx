import React from "react";
import Inputmodal from "./inputmodal";

const Modal = ({ setShowAddModal }) => {
  return (
    <div className="fixed z-50 w-full sm:w-[507px] h-[578px] rounded-lg bg-white border-[#1B345F] border-[1px] py-4 px-2 sm:px-8">
      <h2 className="mb-2.5 font-semibold text-[#1B345F] text-base">Name</h2>
      <input className="mb-6 focus:bg-[#F7731C] font-semibold w-full text-[#1B345F] rounded-full text-sm border-[1px] border-[#1B345F] p-2" placeholder="Name" />
      <h2 className="mb-2.5 font-semibold text-[#1B345F] text-base">Email</h2>
      <input className="mb-6 focus:bg-[#F7731C] font-semibold w-full text-[#1B345F] rounded-full text-sm border-[1px] border-[#1B345F] p-2" placeholder="Email" />
      <h2 className="mb-2.5 font-semibold text-[#1B345F] text-base">Password</h2>
      <input type='password' className="mb-6 focus:bg-[#F7731C] font-semibold w-full text-[#1B345F] rounded-full text-sm border-[1px] border-[#1B345F] p-2" placeholder="Password" />
      <h2 className="mb-2.5 font-semibold text-[#1B345F] text-base">Role</h2>
      <select className="w-full mb-6 focus:bg-[#F7731C] font-semibold text-[#1B345F] rounded-full text-sm border-[1px] border-[#1B345F] p-2" id="cars">
        <option value="user">User</option>
        <option value="superuser">Superuser</option>
      </select>
      <div className="flex">
        <div className="w-1/2 pr-2">
          <h2 className="mb-2.5  font-semibold text-[#1B345F] text-base">Division</h2>
          <select className="mb-6 w-full focus:bg-[#F7731C] font-semibold text-[#1B345F] rounded-full text-sm border-[1px] border-[#1B345F] p-2" id="cars">
            <option value="1">Manager</option>
            <option value="2">Mentor</option>
            <option value="3">Placement</option>
            <option value="4">Skill</option>
          </select>
        </div>
        <div className="w-1/2 pl-2">
          <h2 className="mb-2.5 font-semibold text-[#1B345F] text-base">Status</h2>
          <select className="w-full mb-6 focus:bg-[#F7731C] font-semibold text-[#1B345F] rounded-full text-sm border-[1px] border-[#1B345F] p-2" id="cars">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between">
        <button className="bg-[#F7731C] active:border-[#F7731C] active:bg-[#1B345F] font-semibold text-white w-[145px] sm:w-[215px] rounded-full text-sm border-[1px] py-2" onClick={setShowAddModal(false)}>Cancel</button>
        <button className="bg-[#1B345F] active:border-[#1B345F] active:bg-[#F7731C] font-semibold text-white w-[145px] sm:w-[215px] rounded-full text-sm border-[1px] py-2">Add New</button>
      </div>
    </div>
  );
};

export default Modal;
