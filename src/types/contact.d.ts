import { ReactNode } from "react";

export type Contact = { name: string; number: string };
export type ContactWrapper = { children: Iterable<ReactNode> };
