import { FaChevronDown } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="flex justify-between px-4 py-2">
      <div>
        <h4 className="text-xs">Applications</h4>
        <div className="flex items-center gap-2">
          <h2 className="text-sm">tic-tac-toe</h2>
          <FaChevronDown />
        </div>
      </div>
      <div className="flex gap-2">
        <div>
          <div className="rounded-full bg-yellow-400 w-10 h-10 flex items-center justify-center">
            <p className="font-bold text-white">JD</p>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <h2>John Doe</h2>
          <FaChevronDown />
        </div>
      </div>
    </div>
  );
}
