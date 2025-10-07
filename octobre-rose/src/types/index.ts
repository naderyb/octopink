export interface DonationStage {
  amount: number;
  label: string;
}

export interface Quote {
  text: string;
  author: string;
}

export interface ChartData {
  name: string;
  value: number;
  color?: string;
  [key: string]: string | number | undefined;
}

export interface ClubInfo {
  name: string;
  description: string;
  logo?: string;
  website?: string;
}
