"use client";
import { ConfigProvider, Tabs, Tag } from "antd";
import { GoDotFill } from "react-icons/go";
import type { TabsProps } from "antd";
import { RiComputerLine } from "react-icons/ri";
import {
  DesktopOutlined,
  HistoryOutlined,
  ToolOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import Overview from "./Overview";
import CustomTag from "./CustomTag";
import EnvVariables from "./EnvVariables";

export default function AppInfo({
  selectedApp,
}: {
  selectedApp: ApplicationType;
}) {
  const handleTabChange = (key: string) => {};

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Overview",
      children: <Overview selectedApp={selectedApp} />,
      icon: <DesktopOutlined />,
      style: { height: "100%" },
    },
    {
      key: "2",
      label: "Environment Variables",
      children: <EnvVariables />,
      icon: <ToolOutlined />,
    },
    {
      key: "3",
      label: "Alerts",
      children: "Content of Tab Pane 3",
      icon: <WarningOutlined />,
    },
    {
      key: "4",
      label: "Event history",
      children: "Content of Tab Pane 4",
      icon: <HistoryOutlined />,
    },
  ];
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemSelectedColor: "#37146B",
            inkBarColor: "#37146B",
            itemHoverColor: "#37146B",
          },
        },
      }}
    >
      <div className="p-4 flex flex-col max-h-full overflow-auto gap-2">
        <div className="flex justify-between h-[5%]">
          <h1 className="font-bold text-xl">{selectedApp?.name}</h1>
          <CustomTag status="deployed" />
        </div>
        <div className="h-[95%]">
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={handleTabChange}
            style={{ height: "100%" }}
          />
        </div>
      </div>
    </ConfigProvider>
  );
}
