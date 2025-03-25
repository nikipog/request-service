import './layout.scss';
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout__main">
        <Header />

        <div className="layout__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

