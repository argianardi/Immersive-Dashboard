import React, { useState } from "react";
import Doubleradio from "../components/doubleradio";
import Formaddmentee from "../components/formaddmentee";
import Inputaddmentee from "../components/inputaddmentee";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Router, { useRouter } from "next/router";
import Cookies from "js-cookie";

const AddMentee = () => {
    const router = useRouter();
    const [gender, setGender] = useState("");
    const [type, setType] = useState("");
    const [status, setStatus] = useState("");
    const [pagenow, setPagenow] = useState("Add Mentee");
    const [name, setName] = useState("");
    const [address, setAddsrees] = useState("");
    const [homeAddress, setHomeAddress] = useState("");
    const [classId, setClassId] = useState("");
    const [email, setEmail] = useState("");
    const [telegram, setTelegram] = useState("");
    const [nameEd, setNameEd] = useState("");
    const [phoneEd, setPhoneEd] = useState(0);
    const [major, setMajor] = useState("");
    const [graduate, setGraduate] = useState("");
    const [mentees, setMentees] = useState([]);

    const handleGender = (event) => {
        setGender(event.target.value);
    };
    const handleType = (event) => {
        setType(event.target.value);
    };
    const handleStatus = (event) => {
        setStatus(event.target.value);
    };

    //   -----------------put mentee
    const editMentee = () => {
        // console.log("berhasil menambahkan");
        var axios = require("axios");
        var data = JSON.stringify({
            name: name,
            gender: gender,
            address: address,
            home_address: homeAddress,
            class_id: parseInt(classId),
            email: email,
            telegram: telegram,
            phone: phoneEd,
            category: type, //IT
            name_ed: nameEd,
            phone_ed: phoneEd,
            status_ed: status, //keluarga
            major: major,
            graduate: graduate,
        });

        var config = {
            method: "put",
            url: "https://altagp3.online/mentees/10",
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                router.push("/menteelist");
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="w-full sm:flex">
            <Sidebar pagenow={pagenow} />
            <div className="sm:px-12">
                <Navbar pagenow={pagenow} />
                {/* <form onSubmit={(e) => addNewMentee(e)}> */}
                {/* <div onSubmit={(e) => addNewMentee(e)}> */}
                <div className="justify-between sm:flex">
                    <div className="px-1 ">
                        <h2 className="mb-3 text-lg font-medium">Main Data</h2>
                        <Inputaddmentee type="text" label="Name Mentee" placeholder="Name Mentee" onChange={(e) => setName(e.target.value)} />
                        <Inputaddmentee type="text" placeholder="Address" label="Address" onChange={(e) => setAddsrees(e.target.value)} />
                        <Inputaddmentee type="text" placeholder="Home Address" label="Home Address" onChange={(e) => setHomeAddress(e.target.value)} />
                        <Inputaddmentee type="email" placeholder="Email" label="Email" onChange={(e) => setEmail(e.target.value)} />
                        <Doubleradio label="Gender" option1="Male" option2="Female" choose={(value) => handleGender(value)} />
                        <Inputaddmentee type="text" placeholder="Telegram" label="Telegram" onChange={(e) => setTelegram(e.target.value)} />
                        <Inputaddmentee type="text" label="Class Id" placeholder="Class Id" onChange={(e) => setClassId(e.target.value)} />
                    </div>
                    <div className="px-1">
                        <h2 className="mb-3 text-lg font-medium">Emergency Data</h2>
                        <Inputaddmentee type="text" label="Name" placeholder="Name of Spouse/parent/sibling" onChange={(e) => setNameEd(e.target.value)} />
                        <Inputaddmentee type="number" label="Phone Number" placeholder="Phone Number of Spouse/parent/sibling" onChange={(e) => setPhoneEd(e.target.value)} />
                        <h2 className="mb-3 text-lg font-medium">Education Data</h2>
                        <Formaddmentee change={handleStatus} klik={(value) => handleStatus(value)} />
                        <Doubleradio label="Type" option1="IT" option2="non-IT" choose={(value) => handleType(value)} />
                        <Inputaddmentee type="text" label="Major" placeholder="Major" onChange={(e) => setMajor(e.target.value)} />
                        <Inputaddmentee type="text" label="Graduate" placeholder="Graduate" onChange={(e) => setGraduate(e.target.value)} />
                    </div>
                </div>
                <div className="flex justify-end ">
                    <button
                        className="rounded-lg bg-[#F7731C] text-lg py-2 w-28 mr-5 text-white"
                        onClick={() => {
                            Router.push("/menteelist");
                        }}
                    >
                        Cancel
                    </button>
                    <button onClick={() => editMentee()} className="rounded-lg bg-[#1B345F] text-lg py-2 w-28 text-white" type="submit">
                        Save
                    </button>
                </div>
                {/* </div> */}
                {/* </form> */}
            </div>
        </div>
    );
};

export default AddMentee;
