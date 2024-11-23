import { createContext, useEffect, useState } from "react";
export const ProductContext = createContext();
function Context(props) {
      const [product, setProduct] = useState([]);
      const getProduct = () => {
            const data = JSON.parse(localStorage.getItem("products")) || [];
            setProduct(data);
      };
      useEffect(() => {
            getProduct();
      }, []);
      return <ProductContext.Provider value={{ product, setProduct }}>{props.children}</ProductContext.Provider>;
}

export default Context;
