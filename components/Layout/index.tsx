import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: ReactJSXElement }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="h-auto md:min-h-screen lg:min-h-screen xl:min-h-screen">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
