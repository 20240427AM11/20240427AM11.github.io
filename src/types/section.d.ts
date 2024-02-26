import { HTMLAttributes, ReactNode } from "react";

export interface Section extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title?: string;
  odd?: boolean;
  bg?: boolean;
  clean?: boolean;
  sub?: string;
  header?: boolean;
}

export type SectionTitle = { title?: string; sub?: string };
export type SectionHeader = { clean?: boolean };
