import React from "react";

export interface PageDefinition {
  component: React.FC;
  tag: string;
  title?: string;
}

export interface Page {
  props?: PageDefinition[];
}
