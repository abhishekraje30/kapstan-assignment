"use client";
import useGetApplicationIds from "@/hooks/useGetApplicationIds";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useCallback, useEffect, useState } from "react";

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
  const applicationIds: ApplicationType[] = useGetApplicationIds();

  const getData = useCallback(async () => {
    try {
      const response = await fetch(chartURL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      const seriesData = applicationIds.reduce((acc, app: ApplicationType) => {
        const filteredData = data.filter(
          (x: ChartDataType) => parseInt(x.applicationId) === parseInt(app.id)
        );
        acc.push({
          name: app.name,
          data: filteredData.map((x: ChartDataType) => [
            parseInt(x.timestamp) * 1000,
            parseFloat(x[chartType as keyof ChartDataType] as string),
          ]),
        });
        return acc;
      }, [] as { name: string; data: [number, number][] }[]);

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
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        containerProps={{ style: { height: "100%" } }}
      />
    </div>
  );
}
