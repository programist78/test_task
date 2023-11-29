import { EnumReportStatus } from './enums';


export interface IReportUser {
  id: string;
  userName: string;
  email: string;
  avatarURL: string;
}

export interface IReport {
  id: string;
  code: string;
  reporter: IReportUser;
  text: string;
  createdAt: string;
  status: EnumReportStatus;
}

export interface IReportDetails {
  id: string;
  code: string;
  section: string;
  reporter: IReportUser;
  suspect: IReportUser;
  description: string;
  createdAt: string;
  updatedAt: string;
  attachment: string;
  status: EnumReportStatus;
}
