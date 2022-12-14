import React from "react";
import { GiFlowerStar } from "react-icons/gi";

const Modaladdlog = () => {
  return (
    <>
      {/* <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"> */}
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        <div className="relative flex flex-col w-full bg-white rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="relative flex-auto p-6">
            <form className="w-full px-8 pt-6 pb-8 rounded shadow-md">
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
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (Maximum file size 10MB)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
              <label className="block mt-4 mb-1 text-sm font-bold text-biruAlta">
                Status
              </label>
              <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                  <select
                    className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-biruAlta bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-putihAlta shadow focus:outline-none"
                    aria-label="Default select example"
                  >
                    <option value="1">Active</option>
                    <option value="2">Non-Active</option>
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
              ></textarea>
            </form>
          </div>
          <div className="flex items-center justify-end border-t border-solid rounded-b p- border-blueGray-200 bb">
            <button
              className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase rounded outline-none background-transparent hover:shadow-lg bg-orangeAlta focus:outline-none"
              type="button"
              //   onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <button
              className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase rounded shadow outline-none bg-biruAlta active:bg-yellow-700 hover:shadow-lg focus:outline-none"
              type="button"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Modaladdlog;
