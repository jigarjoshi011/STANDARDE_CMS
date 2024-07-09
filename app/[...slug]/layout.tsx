import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
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
