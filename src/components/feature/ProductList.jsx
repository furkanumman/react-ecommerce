import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  fetchProductsAsync,
  fetchProductsByCategoryAsync,
  searchProductsAsync,
} from "@/store/productsSlice";
import ProductCard from "@/components/block/ProductCard";

const ProductList = ({ limit, skip, title, slug, term }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const isLoading = useSelector((state) => state.products.isLoading);

  useEffect(() => {
    if (slug) {
      dispatch(fetchProductsByCategoryAsync(slug));
    } else if (term) {
      dispatch(searchProductsAsync(term));
    } else {
      dispatch(fetchProductsAsync({ limit, skip }));
    }
  }, [dispatch, limit, skip, slug, term]);

  if (isLoading) {
    return <h1>Yükleniyor...</h1>;
  }

  return (
    <>
      <h1>{title}</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products &&
          products.map((item) => (
            <ProductCard key={item.id} {...item}></ProductCard>
          ))}
      </div>
    </>
  );
};

ProductList.defaultProps = {
  limit: 0,
  skip: 0,
  title: "En çok satanlar",
};

ProductList.propTypes = {
  skip: PropTypes.number,
  limit: PropTypes.number,
  title: PropTypes.string,
  term: PropTypes.string,
};

export default ProductList;
