import TopNavbar from "../component/TopBar";
import Sidebar from "../component/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="layout">

      <TopNavbar />

      <div className="layout__body">
        <Sidebar />

        <main className="layout__content">
          {children}
        </main>

      </div>

    </div>
  );
};

export default Layout;