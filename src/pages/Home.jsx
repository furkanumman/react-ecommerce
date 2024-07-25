import { useState, useEffect } from "react";
import ProductList from "@/components/feature/ProductList";
import Button from "@/components/base/Button";
import { throttle } from "@/utils/helpers";

const Home = () => {
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    handleGoToTop();
  }, [skip]);

  const handleLoadMore = () => {
    setSkip((prev) => prev + 20);
  };

  const handleGoToStart = () => {
    setSkip(0);
  };

  const handleLoadPrev = () => {
    setSkip((prev) => prev - 20);
  };

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = (e) => {
    console.log(e);
  };

  const throttledScroll = throttle(handleScroll, 500);

  useEffect(() => {
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  return (
    <div className="container">
      <p className="text-right">{skip / 20 + 1}. sayfa görüntüleniyor</p>
      <ProductList limit={20} skip={skip} />
      <div className="my-5 flex items-center justify-center gap-4">
        {skip > 0 && (
          <>
            <Button size="sm" onClick={handleGoToStart} disabled={skip == 0}>
              Başa Dön
            </Button>
            <Button size="sm" onClick={handleLoadPrev} disabled={skip == 0}>
              Önceki
            </Button>
          </>
        )}
        <Button size="sm" onClick={handleLoadMore} disabled={skip >= 80}>
          Daha Fazla
        </Button>
      </div>
    </div>
  );
};

export default Home;
