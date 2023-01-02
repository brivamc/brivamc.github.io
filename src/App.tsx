import * as _ from "lodash";
import React from 'react';
import './App.css';
import * as allPages from "./components/pages";
import { Layout } from './components/layout/Layout';

export const App: React.FC = () => {
  const pages = _.flatten(Object.values(allPages).map(p => p.props ?? []));
  const pageOrder = ["about", "experience", "projects", "contact"];
  const sortedPages = _.sortBy(pages, (p) => pageOrder.indexOf(p.tag));

  return (
      <Layout>
        {sortedPages.map(({ tag, component: Component }) => (
          <div key={tag} id={tag}>
            <Component />
          </div>
        ))}
      </Layout>
  );
}
