import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Pagination from "@mui/material/Pagination";
import Search from "../components/search";
import { Icon } from "@iconify/react";
import Router, { useRouter } from "next/router";
import Cookies from "js-cookie";

const Menteelist = () => {
  const [pageApi, setPageApi] = useState(1);
  const [pagenow, setPagenow] = useState("Mentee List");
  const router = useRouter();
  const [mentees, setMentees] = useState([]);

  // -----------------get mentee
  useEffect(() => {
    getMentee();
  }, []);

  const getMentee = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://altagp3.online/mentees",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.data));
        setMentees(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handlePage = (value) => {
    setPageApi(value);
    console.log(value);
  };

  // -----------------delete
  const deleteMentee = (menteeId) => {
    console.log(menteeId);
    var axios = require("axios");

    var config = {
      method: "delete",
      url: `https://altagp3.online/mentees/${menteeId}`,
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        getMentee();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // -----------------put api
  const editMentee = (menteeId) => {
    Router.push({
      pathname: `/editmentee`,
      query: {
        menteeId: menteeId,
      },
    });
  };

  const addingMentee = () => {
    Router.push({
      pathname: "/addMentee",
    });
  };

  return (
    <div className="w-full h-full sm:flex">
      <Sidebar pagenow={pagenow} />
      <div className="w-full sm:px-12">
        <Navbar pagenow={pagenow} />
        <Search showingmodal={addingMentee} />

        <div className="flex justify-center mt-12 sm:justify-end">
          <div className="flex flex-col sm:flex-row">
            <button className="w-32 h-9 text-sm text-white rounded-lg bg-[#1B345F]">
              Export
            </button>
            <form className="hilang:my-2 mx-0.5">
              <select
                className="w-32 h-9 rounded-lg border-[1px] border-[#1B345F]"
                id="status"
                name="status"
              >
                <option value="All Class">All Class</option>
                <option value="QE 7">QE 7</option>
                <option value="FE 8">FE 8</option>
                <option value="BE 11">BE 11</option>
              </select>
            </form>
            <form className="mx-0.5">
              <select
                className="w-32 h-9 rounded-lg border-[1px] border-[#1B345F]"
                id="status"
                name="status"
              >
                <option value="All Class">All Status</option>
                <option value="QE 7">Placement</option>
                <option value="FE 8">Active</option>
                <option value="BE 11">Eleminate</option>
              </select>
            </form>
            <form className=" mx-0.5">
              <select
                className="w-32 h-9 rounded-lg border-[1px] border-[#1B345F]"
                id="status"
                name="status"
              >
                <option value="All Class">All Categories</option>
                <option value="QE 7">Informatics</option>
                <option value="FE 8">Non-Informatics</option>
              </select>
            </form>
            <button className="hilang:my-2 ml-0.5 w-32 h-9 text-sm text-white rounded-lg bg-[#1B345F]">
              Filter
            </button>
          </div>
        </div>
        {/* Tabel */}
        <div className="overflow-x-auto">
          <table className="pb-[72px] mt-10 py-[26px] table-auto border-separate border-spacing-x-6 sm:border-spacing-x-12 border-x-[1px] border-b-[1px] border-slate-500 text-left rounded-b-lg">
            <thead>
              <tr className="text-center snap-mandatory snap-x ">
                <th className="">No.</th>
                <th className="">Name</th>
                <th className="">Class</th>
                <th className="">Status</th>
                <th className="">Category</th>
                <th className="">Gender</th>
                <th className="">Detail</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              {mentees.map((item, index) => {
                return (
                  <tr key={item.id} className="border-[#bababa] border-b-[1px]">
                    <td className="">{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.class}</td>
                    <td>{item.status}</td>
                    <td>{item.category}</td>
                    <td>{item.gender}</td>
                    <td>
                      <button className="active:bg-[#1B345F] text-[#21a41f] active:text-white rounded">
                        <Icon
                          icon="bxs:user-detail"
                          color="#1b345f"
                          width="24"
                          height="24"
                        />
                      </button>
                    </td>
                    <td>
                      <button
                        className="active:bg-[#1B345F] text-[#21a41f] active:text-white rounded"
                        onClick={() => editMentee(item.id)}
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
                        className="active:bg-[#1B345F] text-rose-700 active:text-white rounded"
                        onClick={(e) => deleteMentee(item.id)}
                      >
                        <Icon
                          icon="fluent:delete-12-regular"
                          width="22"
                          height="22"
                        />
                      </button>
                    </td>
                  </tr>
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

export default Menteelist;
