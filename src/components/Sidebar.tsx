"use client";
import Image from "next/image";
import { PiSquaresFourLight } from "react-icons/pi";
import { FaLink, FaRegBookmark } from "react-icons/fa6";
import { TbCurrencyDollar } from "react-icons/tb";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineShield,
} from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { useState } from "react";
import clsx from "clsx";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <aside
      className={clsx(
        "bg-[#37146B] transition-all duration-300 ease-in-out",
        isSidebarOpen ? "w-[20%]" : "w-[5%]"
      )}
    >
      <nav className="flex flex-col justify-between h-full">
        <div className="">
          <div className="flex items-center p-4 border-b border-[#4D1B95]">
            <Image src="/logo.svg" width={50} height={50} alt="Logo" />
            <h1
              className={clsx(
                "text-white font-bold ml-4 text-2xl",
                !isSidebarOpen && "hidden"
              )}
            >
              Kapstan
            </h1>
          </div>
          <div className="border-b border-[#4D1B95] px-2 py-2">
            <div
              className={clsx(
                "bg-[#5820AB] flex items-center px-2 py-2 rounded-md",
                !isSidebarOpen && "justify-center"
              )}
            >
              <PiSquaresFourLight color="white" size={25} />
              <h1
                className={clsx("text-white ml-4", !isSidebarOpen && "hidden")}
              >
                Applications
              </h1>
            </div>
          </div>
          <div
            className={clsx(
              "flex items-center px-4 py-3",
              !isSidebarOpen && "justify-center"
            )}
          >
            <FaLink color="white" size={20} />
            <h1 className={clsx("text-white ml-4", !isSidebarOpen && "hidden")}>
              Connections
            </h1>
          </div>
          <div
            className={clsx(
              "flex items-center px-4 py-3",
              !isSidebarOpen && "justify-center"
            )}
          >
            <TbCurrencyDollar color="white" size={20} />
            <h1 className={clsx("text-white ml-4", !isSidebarOpen && "hidden")}>
              Cost
            </h1>
          </div>
          <div
            className={clsx(
              "flex items-center px-4 py-3 border-b border-[#4D1B95]",
              !isSidebarOpen && "justify-center"
            )}
          >
            <MdOutlineShield color="white" size={20} />
            <h1 className={clsx("text-white ml-4", !isSidebarOpen && "hidden")}>
              Security
            </h1>
            <p
              className={clsx(
                "p-1 ml-4 text-white text-sm bg-[#5820AB] rounded-md",
                !isSidebarOpen && "hidden"
              )}
            >
              Beta
            </p>
          </div>
        </div>
        <div className="">
          <div
            className={clsx(
              "flex items-center px-4 py-3",
              !isSidebarOpen && "justify-center"
            )}
          >
            <LuUser2 color="white" size={20} />
            <h1 className={clsx("text-white ml-4", !isSidebarOpen && "hidden")}>
              Admin
            </h1>
          </div>
          <div
            className={clsx(
              "flex items-center px-4 py-3 border-b border-[#4D1B95]",
              !isSidebarOpen && "justify-center"
            )}
          >
            <FaRegBookmark color="white" size={20} />
            <h1 className={clsx("text-white ml-4", !isSidebarOpen && "hidden")}>
              Docs
            </h1>
          </div>
          <div
            className={clsx(
              "px-4 py-3 flex",
              !isSidebarOpen && "justify-center"
            )}
          >
            <div
              className="w-10 h-10 rounded-full hover:bg-[#5820AB] flex justify-center items-center hover:cursor-pointer"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? (
                <MdOutlineKeyboardDoubleArrowLeft color="white" size={25} />
              ) : (
                <MdOutlineKeyboardDoubleArrowRight color="white" size={25} />
              )}
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
