import axios from "axios";
import Head from "next/head";
import Router from "next/router";
import { useState } from "react";
import { BiCookie, BiLockAlt, BiMailSend } from "react-icons/bi";

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        Router.push({
            pathname: "/dashboard",
        });
        e.preventDefault();
        await axios
            .post("https://virtserver.swaggerhub.com/muhdwiar/groupProjek3/1.0/login", {
                email: email,
                password: password,
            })
            .then((response) => {
                localStorage.setItem("token", response.data.data.token);
                localStorage.setItem("role", response.data.data.role);
            })
            .catch((error) => console.log(error));
    };

    return (
        <>
            <Head>
                <title>ALTA</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div>
                    <div
                        className="min-h-screen px-2 bg-center bg-no-repeat bg-cover sm:px-0 "
                        style={{
                            backgroundImage: `url("https://cdn.discordapp.com/attachments/1017919526748299295/1021418083732164680/unsplash_pUAM5hPaCRI.png")`,
                        }}
                    >
                        {/* logo Alterra */}
                        <div className="pt-14 ">
                            <img
                                src="https://cdn.discordapp.com/attachments/1017919526748299295/1021418179303575562/logo-ALTA2x_1.png"
                                alt="logo alterra"
                                className="h-20 mx-auto mb-5 sm:h-28"
                            />
                        </div>
                        <div className="flex flex-wrap justify-center ">
                            {/* card blue */}
                            <div className="bg-biruAlta w-full sm:w-[500px] h-[180px] lg:h-80 ">
                                <h3 className="mt-10 ml-3 text-2xl font-bold text-white underline sm:text-3xl lg:mt-28 font-poppins">e-learning.alta.ac.id</h3>
                                <div className="flex mt-2 ml-3 text-xl text-white font-roboto">
                                    <div>
                                        <BiCookie size={25} />
                                    </div>
                                    <p className="ml-1">Cookie harus diaktifkan pada browser Anda </p>
                                </div>
                            </div>

                            {/* form Login */}
                            <form className=" bg-putihAlta w-full sm:w-[500px] h-80 flex flex-col gap-4 rounded-b-md" onSubmit={handleSubmit}>
                                <div className="flex items-center px-0 sm:px-3 mt-14">
                                    <BiMailSend size={30} className="mr-2" />
                                    <input
                                        type="email"
                                        className="font-Roboto font-normal w-full text-base pl-6 border-[#25732D] text-black rounded-xl shadow-lg block  p-3 dark:shadow-md  "
                                        placeholder="Email"
                                        required
                                        onChange={(e) => setEmail({ ...email, email: e.target.value })}
                                    />
                                </div>
                                <div className="flex items-center px-0 sm:px-3">
                                    <BiLockAlt size={30} className="mr-2" />
                                    <input
                                        type="password"
                                        className=" w-full  font-Roboto font-normal text-base pl-6 border-[#25732D] text-black rounded-xl shadow-lg  block  py-3  "
                                        placeholder="Password"
                                        required
                                        onChange={(e) => setPassword({ ...password, password: e.target.value })}
                                    />
                                </div>
                                <div className="ml-2">
                                    <input type="checkbox" />
                                    <label> Ingat saya</label>
                                </div>
                                <div className="w-full px-3">
                                    <button
                                        className="w-full py-4 mt-8 text-xl text-white rounded-lg shadow-lg bg-orangeAlta hover:bg-orange-600 font-poppins bg-cyanEboox "
                                        onClick={handleSubmit}
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
