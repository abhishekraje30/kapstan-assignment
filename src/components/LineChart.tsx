"use client";
import useGetApplicationIds from "@/hooks/useGetApplicationIds";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useCallback, useEffect, useState } from "react";

interface CpuDataType {
  id: number;
  timestamp: string;
  applicationId: string;
  cpuUtilization?: string;
  memoryUtilization?: string;
}

interface ApplicationIdsType {
  id: string;
  name: string;
  status: string;
  version: string;
  updatedAt: string;
  desiredVersion: string;
}

export default function LineChart({
  chartTitle,
  chartType,
  chartURL = "",
}: {
  chartTitle: string;
  chartType: "cpuUtilization" | "memoryUtilization";
  chartURL?: string;
}) {
  const [data, setData] = useState<
    { name: string; data: [number, number][] }[]
  >([]);
  const applicationIds: {
    id: string;
    name: string;
    status: string;
    version: string;
    updatedAt: string;
    desiredVersion: string;
  }[] = useGetApplicationIds();

  const getData = useCallback(async () => {
    try {
      const response = await fetch(chartURL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      const seriesData = applicationIds.reduce(
        (acc, app: ApplicationIdsType) => {
          const filteredData = data.filter(
            (x: CpuDataType) => parseInt(x.applicationId) === parseInt(app.id)
          );
          acc.push({
            name: app.name,
            data: filteredData.map((x: CpuDataType) => [
              parseInt(x.timestamp) * 1000,
              parseFloat(x[chartType as keyof CpuDataType] as string),
            ]),
          });
          return acc;
        },
        [] as { name: string; data: [number, number][] }[]
      );

      setData(seriesData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }, [applicationIds, chartType, chartURL]);

  useEffect(() => {
    getData();
  }, [getData]);

  const options = {
    title: {
      text: chartTitle,
      align: "left",
    },

    yAxis: {},

    xAxis: {
      type: "datetime",
      title: {
        text: "Timestamp",
      },
      dateTimeLabelFormats: {
        day: "%e of %b",
      },
    },

    plotOptions: {
      line: {
        marker: {
          enabled: false,
        },
      },
    },

    series: [...data],
  };

  return (
    <div className="p-4">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
