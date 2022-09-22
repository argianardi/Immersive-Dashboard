import React, { useState } from "react";
import { BsPersonBadge } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { ImLibrary } from "react-icons/im";
import { AiOutlineFieldTime } from "react-icons/ai";
import { TbPhone, TbMail, TbBrandTelegram } from "react-icons/tb";
import { GiFlowerStar } from "react-icons/gi";

import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
// import Modaladdlog from "../components/modaladdlog";

const MenteeLog = () => {
  const [pagenow, setPagenow] = useState("Mentee Log");
  const [showModal, setShowModal] = useState(false);
  const [menteeId, setMenteeId] = useState(1);
  const [status, setStatus] = useState("");
  const [feedback, setFeedback] = useState("");
  const [file, setFile] = useState("");

  // ------------------add Feedback
  const addFeedback = (e) => {
    e.preventDefault();
    var axios = require("axios");
    var data = JSON.stringify({
      mentee_id: menteeId,
      status: status,
      feedback: feedback,
    });

    var config = {
      method: "post",
      url: "https://virtserver.swaggerhub.com/muhdwiar/groupProjek3/1.0/feedback",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
            <button
              className="px-8 py-2 rounded-lg bg-biruAlta hover:bg-orangeAlta text-putihAlta"
              onClick={() => setShowModal(true)}
            >
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

          {/* Modal */}
          {showModal ? (
            <>
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none ">
                <div className="relative w-auto max-w-3xl mx-auto my-6">
                  <div className="relative flex flex-col w-full bg-white rounded-lg shadow-lg outline-none focus:outline-none">
                    <div className="relative flex-auto p-0 sm:p-3 ">
                      <form
                        className="w-full px-8 py-6 rounded shadow-md"
                        onSubmit={(e) => addFeedback(e)}
                      >
                        <div className="flex mb-2 justify-evenly">
                          <label className="block mr-auto text-sm font-bold text-biruAlta">
                            Upload and Attach Files
                          </label>
                          <GiFlowerStar className="text-biruAlta" />
                        </div>
                        <div className="flex items-center justify-center w-full">
                          <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg
                                aria-hidden="true"
                                className="w-10 h-10 mb-3 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                              </svg>
                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">
                                  Click to upload
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG, JPG or GIF (Maximum file size 10MB)
                              </p>
                            </div>
                            <input
                              id="dropzone-file"
                              type="file"
                              className="hidden"
                              // onChange={(e) => {
                              //   URL.createObjectURL(e.target.files[0]);
                              //   setFile(e.target.files[0], "file");
                              // }}
                            />
                          </label>
                        </div>

                        <label className="block mt-4 mb-1 text-sm font-bold text-biruAlta">
                          Status
                        </label>
                        <div className="">
                          <div className="mb-3 xl:w-96">
                            <select
                              className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-biruAlta bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-putihAlta shadow focus:outline-none"
                              aria-label="Default select example"
                            >
                              <option value="1">--Pilih Status--</option>
                              <option
                                value="2"
                                onClick={(e) => setStatus("Active")}
                              >
                                Active
                              </option>
                              <option
                                value="3"
                                onClick={(e) => setStatus("Non-Active")}
                              >
                                Non-Active
                              </option>
                            </select>
                          </div>
                        </div>

                        <label className="block mt-4 mb-1 text-sm font-bold text-biruAlta">
                          Feedback
                        </label>
                        <textarea
                          className="w-full px-1 py-2 border rounded shadow appearance-none text-biruAlta"
                          name=""
                          id=""
                          cols="30"
                          rows="4"
                          onChange={(e) => setFeedback(e.target.value)}
                        ></textarea>

                        {/* button */}
                        <div className="flex items-center justify-end mt-3 rounded-b p- border-blueGray-200 bb ">
                          <button
                            className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase rounded outline-none background-transparent hover:shadow-lg bg-orangeAlta focus:outline-none"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                          <button
                            className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase rounded shadow outline-none bg-biruAlta active:bg-yellow-700 hover:shadow-lg focus:outline-none"
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fixed inset-0 z-40 bg-black opacity-70"></div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MenteeLog;
