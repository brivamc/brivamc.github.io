import React from "react";

export interface PortfolioPageProps {
  isMobile?: boolean;
}

export interface PageDefinition {
  component: React.FC<PortfolioPageProps>;
  tag: string;
  title?: string;
}

export interface Page {
  props?: PageDefinition[];
}
