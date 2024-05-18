import { CheckCircleOutlined } from "@ant-design/icons";
import { Button, Tabs, TabsProps } from "antd";
import LineChart from "./LineChart";
import MemoryUtilization from "./EventHistory";
import EventHistory from "./EventHistory";

export default function Overview() {
  const handleTabChange = (key: string) => {
    console.log(key);
  };
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
    <div className="h-full flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-gray-600 text-xl">Service Info</h1>
        <div className="flex gap-8">
          <div>
            <h1 className="text-xs">Current Version</h1>
            <div className="flex gap-2">
              <CheckCircleOutlined color="#34D399" />
              <h1>In sync</h1>
            </div>
          </div>
          <div>
            <h1 className="text-xs">Desired Version</h1>
            <h1>1.2.1</h1>
          </div>
        </div>
        <Button type="primary">Deploy</Button>
      </div>
      <div className="flex gap-2 w-full">
        <div className="w-1/2">
          <h1 className="text-lg text-gray-500 font-semibold">
            System metrics
          </h1>
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={handleTabChange}
            style={{ height: "100%" }}
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
