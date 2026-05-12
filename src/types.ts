export enum View {
  Command = 'Command',
  Verticals = 'Verticals',
  Balance = 'Balance',
  Log = 'Log',
}

export interface ProgramHealth {
  id: string;
  name: string;
  code: string;
  status: 'HEALTHY' | 'WARNING' | 'AT RISK';
  progress: number;
  milestone: string;
  next?: string;
  assignee?: string;
  description?: string;
  image?: string;
  traffic?: string;
}

export interface Commitment {
  id: string;
  title: string;
  impact: string;
  due: string;
  status: 'critical' | 'elevated' | 'nominal';
}

export interface Decision {
  id: string;
  title: string;
  rationale: string;
  vertical: string;
  owner: string;
  ownerImage: string;
  impact: 'Critical' | 'High' | 'Medium' | 'Low';
  status: string;
  reversible?: boolean;
}

export interface LogEntry {
  timestamp: string;
  level: 'SUCCESS' | 'WARN' | 'INFO' | 'CRIT';
  message: string;
}

export interface Initiative {
  id: string;
  code: string;
  title: string;
  description: string;
  status: 'COMMITTED' | 'STRETCH';
  milestone: string;
  assignees: string[];
  vertical: string;
}
