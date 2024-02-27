import { HTMLAttributes, ReactNode } from "react";

export interface Section extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title?: string;
  odd?: boolean;
  bg?: boolean;
  clean?: boolean;
  sub?: string | ReactNode;
  header?: boolean;
}

export type SectionTitle = { title?: string; sub?: boolean };
export type SectionHeader = { clean?: boolean };
