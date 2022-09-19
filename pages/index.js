import { BiCookie, BiLockAlt, BiUserCircle } from "react-icons/bi";

export default function Home() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center min-h-screen px-2 sm:px-0 "
      style={{
        backgroundImage: `url("https://cdn.discordapp.com/attachments/1017919526748299295/1021418083732164680/unsplash_pUAM5hPaCRI.png")`,
      }}
    >
      {/* logo Alterra */}
      <div className="pt-14  ">
        <img
          src="https://cdn.discordapp.com/attachments/1017919526748299295/1021418179303575562/logo-ALTA2x_1.png"
          alt="logo alterra"
          className="mx-auto mb-5 h-20 sm:h-28"
        />
      </div>

      <div className=" flex justify-center flex-wrap ">
        {/* card blue */}
        <div className="bg-biruAlta w-full sm:w-[500px] h-[180px] lg:h-80 ">
          <h3 className="font-bold text-2xl sm:text-3xl mt-10 lg:mt-28 ml-3 font-poppins underline  text-white">
            e-learning.alta.ac.id
          </h3>
          <div className="font-roboto text-xl text-white ml-3 mt-2 flex">
            <div>
              <BiCookie size={25} />
            </div>
            <p className="ml-1">Cookie harus diaktifkan pada browser Anda </p>
          </div>
        </div>

        {/* form Login */}
        <form
          className=" bg-putihAlta w-full sm:w-[500px] h-80 flex flex-col gap-4 rounded-b-md"
          // onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex items-center px-0 sm:px-3 mt-14">
            <BiUserCircle size={30} className="mr-2" />
            <input
              type="text"
              className="font-Roboto font-normal w-full text-base pl-6 border-[#25732D] text-black rounded-xl shadow-lg block  p-3 dark:shadow-md  "
              placeholder="Username"
              required
              // value={}
              // onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex  items-center px-0 sm:px-3">
            <BiLockAlt size={30} className="mr-2" />
            <input
              type="password"
              className=" w-full  font-Roboto font-normal text-base pl-6 border-[#25732D] text-black rounded-xl shadow-lg  block  py-3  "
              placeholder="Password"
              required
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="ml-2">
            <input type="checkbox" />
            <label> Ingat saya</label>
          </div>
          <div className="w-full px-3">
            <button className="text-xl bg-orangeAlta hover:bg-orange-600 w-full py-4  mt-8  text-white shadow-lg font-poppins bg-cyanEboox rounded-lg  ">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
