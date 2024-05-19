import { Tag } from "antd";
import { color } from "highcharts";
import { GoDotFill } from "react-icons/go";

export default function CustomTag({ status }: { status: ApplicationStatus }) {
  const statusArray = [
    { name: "Successful", value: "successful", color: "#34D399" },
    { name: "Deployed", value: "deployed", color: "#34D399" },
    { name: "In Progress", value: "in_progress", color: "#FFA500" },
    { name: "Failed", value: "failed", color: "#EF4444" },
    { name: "Uninstalled", value: "uninstalled", color: "#EF4444" },
  ];
  return (
    <Tag
      style={{
        border: `1px solid ${
          statusArray.filter((x) => x.value === status)[0]?.color
        }`,
        display: "flex",
        alignItems: "center",
        gap: "2px",
        color: statusArray.filter((x) => x.value === status)[0]?.color,
        fontWeight: "bold",
      }}
      icon={<GoDotFill />}
    >
      {statusArray.filter((x) => x.value === status)[0]?.name}
    </Tag>
  );
}
