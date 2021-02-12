import { Document } from "mongoose";

export interface IVerificationHistory extends Document {
  readonly verifiedBy: string;
  readonly serialNumber: string;
}

export interface IVerificationHistoryResponse {
  readonly error: boolean;
  readonly serialNumber: string;
  readonly verificationCount: number;
}

export interface IVerificationHistoryErrorResponse {
  readonly error: boolean;
  readonly reason: string;
  readonly verificationCount: number;
}
