import Image from "next/image";
import { PiSquaresFourLight } from "react-icons/pi";
import { FaLink, FaRegBookmark } from "react-icons/fa6";
import { TbCurrencyDollar } from "react-icons/tb";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineShield,
} from "react-icons/md";
import { LuUser2 } from "react-icons/lu";

export default function Sidebar() {
  return (
    <nav className="flex flex-col justify-between h-full">
      <div className="">
        <div className="flex items-center p-4 border-b border-[#4D1B95]">
          <Image src="/logo.svg" width={50} height={50} alt="Logo" />
          <h1 className="text-white font-bold ml-4 text-2xl">Kapstan</h1>
        </div>
        <div className="border-b border-[#4D1B95] px-2 py-2">
          <div className="bg-[#5820AB] flex items-center px-2 py-2 rounded-md">
            <PiSquaresFourLight color="white" size={25} />
            <h1 className="text-white ml-4">Applications</h1>
          </div>
        </div>
        <div className="flex items-center px-4 py-3">
          <FaLink color="white" size={20} />
          <h1 className="text-white ml-4">Connections</h1>
        </div>
        <div className="flex items-center px-4 py-3">
          <TbCurrencyDollar color="white" size={20} />
          <h1 className="text-white ml-4">Cost</h1>
        </div>
        <div className="flex items-center px-4 py-3 border-b border-[#4D1B95]">
          <MdOutlineShield color="white" size={20} />
          <h1 className="text-white ml-4">Security</h1>
          <p className="p-1 ml-4 text-white text-sm bg-[#5820AB] rounded-md">
            Beta
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex items-center px-4 py-3">
          <LuUser2 color="white" size={20} />
          <h1 className="text-white ml-4">Admin</h1>
        </div>
        <div className="flex items-center px-4 py-3 border-b border-[#4D1B95]">
          <FaRegBookmark color="white" size={20} />
          <h1 className="text-white ml-4">Docs</h1>
        </div>
        <div className="flex items-center px-4 py-3">
          <MdOutlineKeyboardDoubleArrowLeft color="white" size={20} />
        </div>
      </div>
    </nav>
  );
}
