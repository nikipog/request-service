import './layout.scss';
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import { Outlet } from 'react-router-dom';
import { useGetPrioritiesQuery, useGetStatusesQuery, useGetTagsQuery, useGetUsersQuery } from '../../store/slice/api-slice';

export default function Layout() {
  useGetStatusesQuery('Statuses');
  useGetPrioritiesQuery('Priorities');
  useGetTagsQuery('Tags');
  useGetUsersQuery('Users');

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

