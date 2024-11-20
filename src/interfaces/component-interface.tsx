import { ReactNode } from "react";

export interface CardInterface {
  icon: ReactNode;
  title: string;
  description: string,
  value?: string
}