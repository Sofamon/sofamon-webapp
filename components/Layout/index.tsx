import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, showFooter = true }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      {children}
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
