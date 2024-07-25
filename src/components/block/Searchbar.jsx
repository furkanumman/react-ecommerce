import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "@/store/productsSlice";
import { searchProducts } from "@/utils/request";
import { debounce, throttle } from "@/utils/helpers";
import TextInput from "@/components/base/TextInput";
import cn from "classnames";

const Searchbar = () => {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.value.length > 2) {
      console.log(e.target.value);
      searchProducts(e.target.value).then((resp) => console.log(resp));
    }
  };

  const debouncedChange = debounce(handleChange, 500);
  const throttledChange = throttle(handleChange, 500);

  const handleKeyPress = useCallback((e) => {
    if (!!e.target.value) {
      if (e.key === "Enter" || e.keyCode === 13) {
        dispatch(setSearchTerm(e.target.value));
        navigate("/search-results");
      }
    }
  }, []);

  useEffect(() => {
    inputRef.current.addEventListener("keypress", handleKeyPress);
  }, [handleKeyPress]);

  const cls = cn(
    { "w-96": isFocus },
    { "w-52": !isFocus },
    "transition-all will-change-auto duration-700",
  );

  return (
    <TextInput
      ref={inputRef}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={throttledChange}
      placeholder="Ürün Ara"
      name="search"
      size="sm"
      variant="transparent"
      className={cls}
    />
  );
};

export default Searchbar;
