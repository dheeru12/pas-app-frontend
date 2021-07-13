import { business } from './business';

export interface consumer {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
  pan: string;
  businessOverview: string;
  validity: boolean;
  agentUsername: string;
  business: business;
}
