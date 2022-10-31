import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Pagination from "@mui/material/Pagination";
import Search from "../components/search";
import Tabellist from "../components/tabellist";
import Cookies from "js-cookie";
import { Icon } from "@iconify/react";

const Classlist = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [pageApi, setPageApi] = useState(1);
  const [pagenow, setPagenow] = useState("Class List");
  const [newClass, setNewClass] = useState("");
  const [editClass, setEditClass] = useState("");
  const [tabel, setTabel] = useState([]);

  const handleEditClass = (id) => {
    var axios = require("axios");
    var data = JSON.stringify({
      class: editClass,
    });

    var config = {
      method: "put",
      url: "https://altagp3.online/class/" + id,
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setShowEdit(false);
        getData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handlePage = (value) => {
    setPageApi(value);
    console.log(value);
  };
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      name: "Wahyaw",
      email: "aw@gmail.com",
      password: "newPassword",
      role: "user",
      division: "mentor",
      status: "active",
    });

    var config = {
      method: "get",
      url: "https://altagp3.online/class",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setTabel(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleInputClass = (event) => {
    setNewClass(event.target.value);
  };
  const handleEdit = (event) => {
    setEditClass(event.target.value);
  };
  const postingClass = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      class: newClass,
    });

    var config = {
      method: "post",
      url: "https://altagp3.online/class",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setShowModal(false);
        getData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    var axios = require("axios");
    var data = JSON.stringify({
      class: "FE BATCH 1",
    });

    var config = {
      method: "delete",
      url: "https://altagp3.online/class/" + id,
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        getData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="w-full h-screen sm:flex">
      <Sidebar pagenow={pagenow} />
      <div className="w-full sm:px-12">
        <Navbar pagenow={pagenow} />
        <Search showingmodal={() => setShowModal(true)} />

        {showModal ? (
          <div className="flex justify-center">
            <div className="fixed top-1/2 w-auto sm:w-1/2 h-auto rounded-lg border-[#1B345F] border-[1px] bg-white z-50 px-2">
              <h2 className="font-semibold text-center text-[#1B345F]">
                New ClassList
              </h2>
              <input
                onChange={handleInputClass}
                className="rounded-lg border-[#1B345F] border-[1px] px-2 w-full"
                type="text"
                placeholder="Input new classlist"
              />
              <div className="flex justify-center mt-4">
                <button
                  className="rounded-lg bg-[#F7731C] text-lg py-2 w-28 mr-5 text-white"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="rounded-lg bg-[#1B345F] text-lg py-2 w-28 text-white"
                  onClick={() => postingClass()}
                >
                  Add Class
                </button>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="flex justify-center px-2 overflow-x-auto">
          <table className="pb-[72px] mt-10 overflow-x-auto w-full py-[26px] table-auto border-separate border-spacing-x-2 sm:border-spacing-x-12 border-x-[1px] border-b-[1px] border-slate-500 text-left rounded-b-lg">
            <thead>
              <tr className="text-center">
                <th>Id</th>
                <th>Class</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {tabel.map((item, index) => {
                return (
                  <>
                    {showEdit ? (
                      <div className="fixed w-full">
                        <div className="fixed top-1/2 w-auto sm:w-1/2 h-auto rounded-lg border-[#1B345F] border-[1px] bg-white z-50 px-2">
                          <h2 className="font-semibold text-center text-[#1B345F]">
                            New ClassList
                          </h2>
                          <input
                            onChange={handleEdit}
                            className="rounded-lg border-[#1B345F] border-[1px] px-2 w-full"
                            type="text"
                            placeholder="Input new classlist"
                          />
                          <div className="flex justify-center mt-4">
                            <button
                              className="rounded-lg bg-[#F7731C] text-lg py-2 w-28 mr-5 text-white"
                              onClick={() => setShowEdit(false)}
                            >
                              Cancel
                            </button>
                            <button
                              className="rounded-lg bg-[#1B345F] text-lg py-2 w-28 text-white"
                              onClick={() => handleEditClass(item.id)}
                            >
                              Edit Class
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}

                    <tr
                      className="text-center border-[#bababa] border-b-[1px]"
                      style={{ border: "1px solid #000" }}
                      key={index}
                    >
                      <td className="">{item.id}</td>
                      <td>{item.class}</td>
                      <td>
                        <button
                          onClick={() => setShowEdit(true)}
                          className="active:bg-[#1B345F] text-[#21a41f] active:text-white rounded"
                        >
                          <Icon
                            icon="ant-design:edit-outlined"
                            width="26"
                            height="24"
                          />
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="active:bg-[#1B345F] text-[#21a41f] active:text-white rounded"
                        >
                          <Icon
                            icon="fluent:delete-12-regular"
                            width="22"
                            height="22"
                          />
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-[55px]">
          <Pagination
            count={10}
            onChange={(e, value) => handlePage(value)}
            showFirstButton
            showLastButton
          />
        </div>
      </div>
    </div>
  );
};

export default Classlist;
