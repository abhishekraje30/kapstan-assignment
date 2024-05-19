enum ApplicationStatus {
  Successful = "successful",
  Deployed = "deployed",
  InProgress = "in_progress",
  Failed = "failed",
  Uninstalled = "uninstalled",
}

interface ApplicationType {
  id: string;
  name: string;
  status: ApplicationStatus;
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
