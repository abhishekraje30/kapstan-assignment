import { Table, TableProps, Tag } from "antd";
import { useCallback, useEffect, useState } from "react";
import CustomTag from "./CustomTag";

interface DataType {
  key: number;
  event: string;
  version: string;
  status: ApplicationStatus;
}

export default function EventHistory() {
  const [data, setData] = useState<DataType[]>([]);
  const getData = useCallback(async () => {
    try {
      const response = await fetch("https://retoolapi.dev/TYjDIe/eventhistory");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      const data = responseData.map((x: any, index: number) => ({
        key: x.id,
        event: x.event,
        version: x.version,
        status: x.status,
      }));
      setData(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }, []);
  useEffect(() => {
    getData();
  }, [getData]);
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Event",
      dataIndex: "event",
      key: "event",
    },
    {
      title: "Version",
      dataIndex: "version",
      key: "version",
    },

    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      width: "20%",
      render: (status: ApplicationStatus) => {
        return <CustomTag status={status} />;
      },
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        size="large"
        pagination={{
          pageSize: 7,
          showSizeChanger: false,
        }}
      />
    </div>
  );
}
