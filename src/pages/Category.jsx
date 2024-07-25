import { useParams } from "react-router-dom";
import ProductList from "@/components/feature/ProductList";
import { unSlugify } from "@/utils/helpers";

const Category = () => {
  const { slug } = useParams();
  return (
    <div className="container">
      <ProductList slug={slug} title={unSlugify(slug)} />
    </div>
  );
};

export default Category;
