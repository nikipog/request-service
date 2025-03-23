import './layout.scss';
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout__main">
        <Header />
        <main className="layout__content">

        </main>
      </div>
    </div>
  );
}

export default Layout;
