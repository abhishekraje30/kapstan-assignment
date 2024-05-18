interface ApplicationType {
  id: string;
  name: string;
  status: string;
  version: string;
  updatedAt: string;
  desiredVersion: string;
}

interface ChartDataType {
  id: number;
  timestamp: string;
  applicationId: string;
  cpuUtilization?: string;
  memoryUtilization?: string;
}
