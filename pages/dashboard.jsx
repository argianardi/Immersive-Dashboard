// import React from "react";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { FaBriefcase, FaGraduationCap, FaUserPlus } from "react-icons/fa";
import { Graduated, Placement, Register } from "../components/jumlahmentee";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [pagenow, setPagenow] = useState("Dashboard");
  const [jumlahMentee, setJumlahMentee] = useState({
    labels: Register.map((data) => data.month),
    datasets: [
      {
        label: "Register",
        data: Register.map((data) => data.jumlah_mentee),
        borderColor: "#F7731C",
        backgroundColor: "#F7731C",
        tension: 0.5,
      },
      {
        label: "Graduated",
        data: Graduated.map((data) => data.jumlah_mentee),
        borderColor: "#4169E1",
        backgroundColor: "#4169E1",
        tension: 0.5,
      },
      {
        label: "Placement",
        data: Placement.map((data) => data.jumlah_mentee),
        borderColor: "#D70040",
        backgroundColor: "#D70040",
        tension: 0.5,
      },
    ],
  });

  return (
    <div className="w-full min-h-screen sm:flex">
      <Sidebar pagenow={pagenow} />
      <div className="w-full px-1 lg:px-12 ">
        <Navbar pagenow={pagenow} />
        {/* content */}
        <div>
          {/* card jumlah mentee */}
          <div className="flex flex-wrap justify-center px-0 mx-auto mt-3 md:justify-between md:px-5">
            <div className="w-full mx-5 mt-5 rounded-lg shadow-md sm:w-52 h-36 shadow-biruAlta/50 md:mt-0 md:mx-0">
              <p className="p-2 text-xs font-bold text-end text-biruAlta font-poppins">
                Mentee Active
              </p>
              <div className="flex items-center justify-between px-10 mt-6 sm:px-5">
                <FaGraduationCap size={55} className="text-biruAlta" />
                <p className="text-5xl text-biruAlta">99</p>
              </div>
            </div>
            <div className="w-full mx-5 mt-5 rounded-lg shadow-md sm:w-52 h-36 shadow-biruAlta/50 md:mt-0 md:mx-0">
              <p className="p-2 text-xs font-bold text-end text-biruAlta font-poppins">
                Mentee Placement
              </p>
              <div className="flex items-center justify-between px-10 mt-6 sm:px-5">
                <FaBriefcase size={55} className="text-biruAlta" />
                <p className="text-5xl text-center text-biruAlta ">99</p>
              </div>
            </div>
            <div className="w-full mx-5 mt-5 rounded-lg shadow-md sm:w-52 h-36 shadow-biruAlta/50 md:mt-0 md:mx-0 ">
              <p className="p-2 text-xs font-bold text-end text-biruAlta font-poppins">
                Mentee Feedback
              </p>
              <div className="flex items-center justify-between px-10 mt-6 sm:px-5">
                <FaUserPlus size={55} className="text-biruAlta" />
                <p className="text-5xl text-center text-biruAlta ">99</p>
              </div>
            </div>
          </div>

          {/* Grafik */}
          <div className="pb-2 px-2 sm:px-0 mt-10 w-full sm:w-[600px] mx-auto shadow-md shadow-biruAlta/50 rounded-sm">
            <div className="w-full sm:w-[550px] mx-auto   ">
              <Line
                data={jumlahMentee}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      display: false,
                    },
                    title: {
                      display: true,
                      text: "Progress Mentee",
                      font: { size: 30 },
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                      },
                    },
                    y: {
                      grid: {
                        display: true,
                      },
                    },
                  },
                }}
              />
            </div>
            {/* keterangan grafik */}
            <div className="flex flex-col sm:flex-row justify-evenly w-full mt-1 sm:mt-5 sm:w-[550px] mx-auto">
              <div className="">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-sm bg-orangeAlta"></div>
                  <p className="ml-1 text-sm font-semibold font-poppins text-biruAlta">
                    Register
                  </p>
                </div>
                <p className="text-xs text-biruAlta font-roboto">
                  Calon Mentee yang sudah terdaftar
                </p>
              </div>

              <div className="mr-5">
                <div className="flex items-center">
                  <div className="bg-[#4169E1] h-5 w-5 rounded-sm"></div>
                  <p className="ml-1 text-sm font-semibold text-biruAlta font-poppins">
                    {" "}
                    Graduated{" "}
                  </p>
                </div>
                <p className="text-xs text-biruAlta">Mentee yang sudah lulus</p>
              </div>

              <div className="">
                <div className="flex items-center">
                  <div className="bg-[#D70040] h-5 w-5 rounded-sm"></div>
                  <p className="ml-1 text-sm font-semibold text-biruAlta font-poppins">
                    Placement
                  </p>
                </div>
                <p className="text-xs text-biruAlta">
                  Mentee yang sedang penempatan kerja
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
