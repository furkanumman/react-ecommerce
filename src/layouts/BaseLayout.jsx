import { Outlet } from "react-router-dom";
import Header from "@/components/feature/Header";
import Footer from "@/components/feature/Footer";

const BaseLayout = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header />
      <Outlet />
      {children}
      <Footer />
    </main>
  );
};

export default BaseLayout;
