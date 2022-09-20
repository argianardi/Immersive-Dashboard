import React from "react";
import { Icon } from '@iconify/react';

const Navbar = ({ pagenow }) => {
  return (
    <div className="pb-[39px] border-b-[1px] border-[#bababa] flex justify-between font-semibold text-[#1B345F] pt-2.5">
      <div>
        <h2 className="text-xl">IMMERSIVE DASHBOARD</h2>
        <h2 className="text-lg">{pagenow}</h2>
      </div>
      <div className="flex mt-[21px]">
        <Icon height={32} width={32} icon="carbon:notification-new" />
        <h2 className="text-lg ml-[12px]">Hello, Jon Doe</h2>
      </div>
    </div>
  );
};

export default Navbar;
