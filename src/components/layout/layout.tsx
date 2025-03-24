import './layout.scss';
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout__main">
        <Header />

        <div className="layout__content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
