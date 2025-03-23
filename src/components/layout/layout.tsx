// import Sidebar from './Sidebar';

import Header from "../header/header";

function Layout() {
  return (
    <div className="layout">
      {/* <Sidebar /> */}
      <div className="layout__headerContainer">
        <Header />
        <main className="layout__mainContent">

        </main>
      </div>
    </div>
  );
}

export default Layout;
