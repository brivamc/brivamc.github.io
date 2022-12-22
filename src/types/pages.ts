import React from "react";

export interface PageDefinition {
  component: React.FC;
  route: string;
  title?: string;
}

export interface Page {
  props?: PageDefinition[];
}
