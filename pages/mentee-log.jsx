import React, { useState } from "react";
import { BsPersonBadge } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { ImLibrary } from "react-icons/im";
import { AiOutlineFieldTime } from "react-icons/ai";
import { TbPhone, TbMail, TbBrandTelegram } from "react-icons/tb";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const MenteeLog = () => {
  const [pagenow, setPagenow] = useState("Mentee Log");
  return (
    <div className="w-full min-h-screen sm:flex ">
      <Sidebar pagenow={pagenow} />
      <div className="w-full px-1 lg:px-12 ">
        <Navbar pagenow={pagenow} />

        {/* content */}
        <div>
          <div className="flex flex-wrap justify-between flex-col md:flex-row  w-full xl:w-[900px] mt-5">
            {/* nama dan jurusan */}
            <div className="order-2 ml-10 md:ml-0 md:order-1 ">
              <div className="flex items-center mb-5">
                <BsPersonBadge className="text-biruAlta " size={28} />
                <p className="ml-5 text-xs font-roboto text-biruAlta">
                  John Doe
                </p>
              </div>
              <div className="flex items-center mb-5">
                <ImLibrary className="text-biruAlta " size={28} />
                <p className="ml-5 text-xs font-roboto text-biruAlta">
                  Queality Engineer Batch 3
                </p>
              </div>
              <div className="flex items-center mb-5">
                <FaGraduationCap className="text-biruAlta" size={28} />
                <p className="ml-5 text-xs font-roboto text-biruAlta">
                  Politeknik Negeri Jakarta
                </p>
              </div>
            </div>

            {/* foto */}
            <div className="self-center sm:order-1 md:order-2">
              <img
                src="https://cdn.discordapp.com/attachments/1017919526748299295/1022035827020275722/john_doe.jpg"
                alt="gambar profile"
                className="w-[200px] md:w-[150px] h-[280px] md:h-[175px] rounded-b-[50px]"
              />
            </div>

            {/* contact */}
            <div className="order-3 ml-10 md:ml-0">
              <div className="flex items-center mb-5">
                <TbPhone className="text-biruAlta" size={28} />
                <p className="ml-5 text-xs font-roboto text-biruAlta">
                  08123456789
                </p>
              </div>
              <div className="flex items-center mb-5 ">
                <TbBrandTelegram className="text-biruAlta " size={28} />
                <p className="ml-5 text-xs font-roboto text-biruAlta">
                  @johndoe#2345
                </p>
              </div>
              <div className="flex items-center mb-5">
                <TbMail className="text-biruAlta" size={28} />
                <p className="ml-5 text-xs font-roboto text-biruAlta">
                  John@alterra.id
                </p>
              </div>
            </div>
          </div>

          {/* button */}
          <div className="flex justify-end w-full mt-7">
            <button className="px-8 py-2 rounded-lg bg-biruAlta text-putihAlta">
              Add New Log
            </button>
          </div>

          {/* card feedback */}
          <div className="w-full p-2 mt-3 rounded-md shadow-md shadow-biruAlta/50 ">
            <div className="flex flex-col items-center md:flex-row ">
              <h3 className=" w-full md:w-[20%] px-2 text-center md:text-left text-base font-poppins text-biruAlta">
                End of Section Bagas Sep 27, 2022
              </h3>
              <p className=" w-ful mt-2 md:mt-0 md:w-[80%] md:px-3 text-sm  font-roboto text-biruAlta">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                obcaecati molestiae modi voluptatibus doloremque vero amet
                maxime eos alias nesciunt! Repudiandae obcaecati nemo molestiae,
                alias perferendis inventore assumenda, magnam dolores dolorum
                consequatur nesciunt cum ipsum iure eum soluta adipisci
                dignissimos laborum labore doloremque perspiciatis maiores,
                suscipit modi. Perferendis deleniti fuga rerum odio fugiat,
                reprehenderit officia deserunt amet sed expedita, repudiandae
                libero? Error quod repellat nam quo sint odit quidem.
                necessitatibus maxime quidem doloribus blanditiis molestiae.
              </p>
            </div>
            <div className="flex items-center justify-center mt-5">
              <h3 className="text-lg text-biruAlta">
                Changed Status: Join Class{" "}
              </h3>
              <AiOutlineFieldTime size={28} className="ml-2 text-biruAlta" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeLog;
