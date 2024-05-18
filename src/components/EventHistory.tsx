import { Table, TableProps, Tag } from "antd";
import { useCallback, useEffect, useState } from "react";
import CustomTag from "./CustomTag";

interface DataType {
  key: number;
  event: string;
  version: string;
  status: string;
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
      render: (status: string) => {
        console.log(status);
        let color = "green";

        return <CustomTag status={status} />;
      },
    },
  ];

  const dataSource: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        size="middle"
        pagination={{
          pageSize: 4,
          showSizeChanger: false,
        }}
      />
    </div>
  );
}
