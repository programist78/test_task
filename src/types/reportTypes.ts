import { EnumReportStatus } from './enums';

export interface IReport {
  id: string;
  code: string;
  reporter: {
    userName: string;
    email: string;
    avatarURL: string;
  };
  text: string;
  createdAt: string;
  status: EnumReportStatus;
}
