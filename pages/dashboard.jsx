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
    <div className="">
      {/* card jumlah mentee */}
      <div className=" flex  flex-wrap justify-center md:justify-between mx-auto px-0 md:px-5 mt-3 ">
        <div className=" w-full sm:w-52 h-36  rounded-lg shadow-md shadow-biruAlta/50 mt-5 md:mt-0 mx-5 md:mx-0">
          <p className="text-xs text-end text-biruAlta font-poppins font-bold p-2">
            Mentee Active
          </p>
          <div className="flex  mt-6 items-center justify-between px-10 sm:px-5">
            <FaGraduationCap size={55} className="text-biruAlta" />
            <p className=" text-5xl text-biruAlta">99</p>
          </div>
        </div>
        <div className="w-full sm:w-52 h-36 shadow-md rounded-lg shadow-biruAlta/50 mt-5 md:mt-0 mx-5 md:mx-0">
          <p className="text-xs text-end text-biruAlta font-poppins font-bold p-2">
            Mentee Placement
          </p>
          <div className="flex  mt-6 items-center justify-between px-10 sm:px-5">
            <FaBriefcase size={55} className="text-biruAlta" />
            <p className="text-center text-5xl text-biruAlta ">99</p>
          </div>
        </div>
        <div className="w-full sm:w-52 h-36 shadow-md rounded-lg shadow-biruAlta/50 mt-5 md:mt-0 mx-5 md:mx-0 ">
          <p className="text-xs text-end text-biruAlta font-poppins font-bold p-2">
            Mentee Feedback
          </p>
          <div className="flex  mt-6 items-center justify-between px-10 sm:px-5">
            <FaUserPlus size={55} className="text-biruAlta" />
            <p className="text-center text-5xl text-biruAlta ">99</p>
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
              <div className="bg-orangeAlta w-5 h-5 rounded-sm"></div>
              <p className="ml-1 font-poppins font-semibold text-biruAlta text-sm">
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
              <p className="font-semibold text-biruAlta ml-1 font-poppins text-sm">
                {" "}
                Graduated{" "}
              </p>
            </div>
            <p className="text-xs text-biruAlta">Mentee yang sudah lulus</p>
          </div>

          <div className="">
            <div className="flex items-center">
              <div className="bg-[#D70040] h-5 w-5 rounded-sm"></div>
              <p className="font-semibold text-biruAlta ml-1 font-poppins text-sm">
                Placement
              </p>
            </div>
            <p className=" text-biruAlta text-xs">
              Mentee yang sedang penempatan kerja
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
