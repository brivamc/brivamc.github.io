import * as _ from "lodash";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import * as allPages from "./components/pages";
import { Layout } from './components/layout/Layout';

export const App: React.FC = () => {
  const pages = _.flatten(Object.values(allPages).map(p => p.props ?? []));
  return (
    <Router>
      <Layout>
        <Routes>
          {pages.map(({ route, component: Component }) => (
            <Route key={route} element={<Component />} path={route} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
}
