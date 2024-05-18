import { CheckCircleOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Tabs, TabsProps } from "antd";
import LineChart from "./LineChart";
import MemoryUtilization from "./EventHistory";
import EventHistory from "./EventHistory";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Overview({
  selectedApp,
}: {
  selectedApp: ApplicationType;
}) {
  const handleTabChange = (key: string) => {};
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "CPU",
      children: (
        <LineChart
          chartTitle="CPU"
          chartType="cpuUtilization"
          chartURL="https://retoolapi.dev/Ymxfa2/cpuutilization"
        />
      ),
    },
    {
      key: "2",
      label: "Memory",
      children: (
        <LineChart
          chartTitle="Memory"
          chartType="memoryUtilization"
          chartURL="https://retoolapi.dev/ybFVVH/memoryutilization"
        />
      ),
    },
  ];
  return (
    <div className="h-full flex flex-col gap-2 px-4 py-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-gray-500 text-lg font-semibold">Service Info</h1>
        <div className="flex gap-24">
          <div className="flex flex-col gap-2">
            <h1 className="text-xs text-gray-500">Current Version</h1>
            <div className="flex gap-2 items-center">
              <FaRegCircleCheck color="green" />
              <h1 className="font-semibold">In sync</h1>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xs text-gray-500">Desired Version</h1>
            <h1 className="font-semibold">{selectedApp?.desiredVersion}</h1>
          </div>
        </div>
        <div>
          <Button type="primary">Deploy</Button>
        </div>
      </div>
      <div className="flex gap-2 w-full py-2">
        <div className="w-1/2">
          <h1 className="text-lg text-gray-500 font-semibold">
            System metrics
          </h1>

          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={handleTabChange}
            centered
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-lg text-gray-500 font-semibold">Event History</h1>
          <EventHistory />
        </div>
      </div>
    </div>
  );
}
