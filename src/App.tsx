import "./App.css";

import { useMediaQuery, useTheme } from "@mui/material";
import * as _ from "lodash";
import React from "react";

import { Layout } from "./components/layout/Layout";
import * as allPages from "./pages";

export const App: React.FC = () => {
  const pages = _.flatten(Object.values(allPages).map(p => p.props ?? []));
  const pageOrder = ["main", "about", "experience", "projects", "contact"];
  const sortedPages = _.sortBy(pages, p => pageOrder.indexOf(p.tag));
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "lg"));

  return (
    <Layout isMobile={isMobile}>
      {sortedPages.map(({ tag, component: Component }) => (
        <div key={tag} id={tag}>
          <Component isMobile={isMobile} />
        </div>
      ))}
    </Layout>
  );
};
