import { Dropdown } from "antd";
import { FaChevronDown } from "react-icons/fa6";

export default function Navbar({
  selectedApp,
  applications,
  setApplication,
}: {
  selectedApp: ApplicationType;
  applications: ApplicationType[];
  setApplication: (app: ApplicationType) => void;
}) {
  const items = applications.map((app) => ({
    key: app.id,
    label: app.name,
    onClick: () => setApplication(app),
  }));
  return (
    <div className="flex justify-between pl-4 py-2 pr-8">
      <div>
        <h4 className="text-xs text-gray-500">Applications</h4>
        <Dropdown menu={{ items }}>
          <div className="flex items-center gap-2">
            <h2 className="text-sm">{selectedApp?.name}</h2>
            <FaChevronDown />
          </div>
        </Dropdown>
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
