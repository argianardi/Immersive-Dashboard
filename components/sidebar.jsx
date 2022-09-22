import React from "react";
import Image from "next/image";
import Alta from "../public/img/logo-ALTA.png";
import { Icon } from "@iconify/react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import cookie from "js-cookie";
import Router from "next/router";

const Sidebar = ({ pagenow }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogOut = async () => {
        await cookie.remove("token");
        await cookie.remove("role");
        await Router.push({ pathname: "/" });
    };

    return (
        <div className="w-full sm:w-52 bg-[#F0F4FD] px-2 sm:px-[35px] py-[37px] text-lg">
            <div className="flex justify-center sm:flex-none w-full border-b-[1px] border-[#bababa] pb-[16px]">
                <Image unoptimized={true} className="w-full" src={Alta} alt="Logo Alta" />
            </div>
            <div className="mt-4 w-full notdropnav:hidden flex justify-center text-xl text-[#1B345F] ">
                <Button
                    className="text-[#1B345F] font-semibold text-xl"
                    id="fade-button"
                    aria-controls={open ? "fade-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                >
                    {pagenow} <Icon icon="bi:caret-down-fill" />
                </Button>
                <Menu
                    className=" bg-[#1B345F]/20"
                    id="fade-menu"
                    MenuListProps={{
                        "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem className="hover:bg-[#1B345F] hover:text-white" onClick={handleClose}>
                        <Icon className="mt-2 mr-2" icon="carbon:dashboard" />
                        Dasboard
                    </MenuItem>
                    <MenuItem className="hover:bg-[#1B345F] hover:text-white" onClick={handleClose}>
                        <Icon className="mt-2 mr-2" icon="ph:student" />
                        Mentee
                    </MenuItem>
                    <MenuItem className="hover:bg-[#1B345F] hover:text-white" onClick={handleClose}>
                        <Icon className="mt-2 mr-2" icon="clarity:user-line" />
                        User
                    </MenuItem>
                    <MenuItem className="hover:bg-[#1B345F] hover:text-white" onClick={handleClose}>
                        <Icon className="mt-2 mr-2" icon="eos-icons:storage-class-outlined" />
                        Class
                    </MenuItem>
                    <MenuItem className="hover:bg-[#1B345F] hover:text-white" onClick={handleClose}>
                        <Icon className="mt-2 mr-2" icon="oi:account-logout" />
                        Logout
                    </MenuItem>
                </Menu>
            </div>
            <div className="h-screen dropnav:hidden">
                <div className=" cursor-pointer justify-center sm:justify-start sm:flex-none my-[19px] flex rounded-lg sm:px-[5px] text-[#1B345F] hover:bg-[#1B345F] hover:text-white">
                    <Icon className="mt-1" icon="carbon:dashboard" />
                    <h2 className="ml-[15px] mb-1">Dashboard</h2>
                </div>
                <div className="cursor-pointer justify-center sm:justify-start flex rounded-lg px-[5px] text-[#1B345F] hover:bg-[#1B345F] hover:text-white">
                    <Icon className="mt-1" icon="ph:student" />
                    <h2 className="ml-[15px] mb-1">Mentee</h2>
                </div>
                <div className="cursor-pointer justify-center sm:justify-start my-[19px] flex rounded-lg px-[5px] text-[#1B345F] hover:bg-[#1B345F] hover:text-white">
                    <Icon className="mt-1" icon="clarity:user-line" />
                    <h2 className="ml-[15px] mb-1">User</h2>
                </div>
                <div className="cursor-pointer justify-center sm:justify-start flex rounded-lg px-[5px] text-[#1B345F] hover:bg-[#1B345F] hover:text-white">
                    <Icon className="mt-1" icon="eos-icons:storage-class-outlined" />
                    <h2 className="ml-[15px] mb-1">Class</h2>
                </div>
                <div
                    className="cursor-pointer justify-center sm:justify-start flex rounded-lg px-[5px] text-[#1B345F] hover:bg-[#1B345F] hover:text-white mt-[19px]"
                    onClick={handleLogOut}
                >
                    <Icon className="mt-2" icon="oi:account-logout" />
                    <h2 className="ml-[15px] mb-1">Logout</h2>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
