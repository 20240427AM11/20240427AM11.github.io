import { ReactNode } from "react";

export type Section = {
  children: ReactNode;
  title?: String;
  odd?: Boolean;
  bg?: Boolean;
  clean?: Boolean;
};

export type SectionTitle = { title?: String };
export type SectionHeader = { clean?: Boolean };
