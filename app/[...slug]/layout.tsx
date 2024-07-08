import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { FC } from "react";

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
