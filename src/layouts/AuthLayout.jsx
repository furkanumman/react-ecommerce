import { Outlet } from "react-router-dom";
import HeaderLite from "@/components/feature/HeaderLite";
import Footer from "@/components/feature/Footer";

const AuthLayout = ({ children }) => {
  return (
    <main className="flex h-screen flex-col justify-between">
      <HeaderLite />
      <Outlet />
      {children}
      <Footer></Footer>
    </main>
  );
};

export default AuthLayout;
