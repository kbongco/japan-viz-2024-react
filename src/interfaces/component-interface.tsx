import { ReactNode } from "react";

export interface CardInterface {
  icon: ReactNode;
  title: string;
  description: string,
  value?: string
}

export interface CircleGraph {
  labels: string[];
  datasets: GraphData
}

export interface GraphData {
  label: string;
  data: number[];
  backgroundColor: string[];
}

export interface ToggleProps{
  label: string;
}