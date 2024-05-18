"use client";
import { Tabs, Tag } from "antd";
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

export default function AppInfo() {
  const handleTabChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Overview",
      children: <Overview />,
      icon: <DesktopOutlined />,
      style: { height: "100%" },
    },
    {
      key: "2",
      label: "Environment Variables",
      children: "Content of Tab Pane 2",
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
    <div className="px-4 py-2 flex flex-col h-full gap-2">
      <div className="flex justify-between h-[5%]">
        <h1 className="font-bold text-xl">tic-tac-toe</h1>

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
  );
}
