import * as _ from "lodash";
import React from 'react';
import './App.css';
import * as allPages from "./pages";
import { Layout } from './components/layout/Layout';
import { useMediaQuery, useTheme } from "@mui/material";

export const App: React.FC = () => {
  const pages = _.flatten(Object.values(allPages).map(p => p.props ?? []));
  const pageOrder = ["main", "about", "experience", "projects", "contact"];
  const sortedPages = _.sortBy(pages, (p) => pageOrder.indexOf(p.tag));
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));

  return (
      <Layout isMobile={isMobile}>
        {sortedPages.map(({ tag, component: Component }) => (
          <div key={tag} id={tag}>
            <Component isMobile={isMobile} />
          </div>
        ))}
      </Layout>
  );
}
