import Logo from "@/components/base/Logo";
import Navbar from "@/components/block/Navbar";
import Searchbar from "@/components/block/Searchbar";
import Topbar from "@/components/block/Topbar";
import Userbar from "@/components/block/Userbar";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 mb-4 shadow">
      <Topbar />
      <section className="relative z-20 flex items-center justify-center gap-4 bg-primary py-4">
        <Logo />
        <Searchbar />
        <Userbar />
      </section>
      <Navbar />
    </header>
  );
};

export default Header;
