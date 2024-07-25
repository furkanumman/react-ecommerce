import Logo from "@/components/base/Logo";

const HeaderLite = () => {
  return (
    <header className="sticky top-0 mb-4">
      <div className="flex items-center justify-center bg-primary-dark py-4">
        <Logo />
      </div>
    </header>
  );
};

export default HeaderLite;
