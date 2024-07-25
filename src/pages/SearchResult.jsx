import { useSelector } from "react-redux";
import ProductList from "../components/feature/ProductList";
import LinkBase from "@/components/base/LinkBase";

const SearchResult = () => {
  const searchTerm = useSelector((state) => state.products.searchTerm);
  const title = `${searchTerm} için arama sonuçları`;
  if (!searchTerm) {
    return (
      <div className="container">
        <h1>Arama sonucu bulunamadı!</h1>
        <LinkBase to="/" tag="link">
          Anasayfaya dön
        </LinkBase>
      </div>
    );
  }
  return (
    <div className="container">
      <ProductList title={title} term={searchTerm} />
    </div>
  );
};

export default SearchResult;
