import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loader from "./Loader";

function Card() {
      const { product } = useContext(ProductContext);
      const { search } = useLocation();
      let category = decodeURIComponent(search.split("=")[1] || "");
      const [filterProduct, setFilteredProduct] = useState([]);
      const getQueryProducts = async () => {
            const data = product.filter((item) => {
                  if (item.category.toLowerCase() == category.toLowerCase()) return item;
            });
            setFilteredProduct(data);
      };
      useEffect(() => {
            if (category) getQueryProducts();
            if (!category) {
                  setFilteredProduct(product);
            }
      }, [product, category]);
      return filterProduct.length > 0 ? (
            filterProduct.map((item, index) => {
                  return (
                        <div key={index} className="w-full rounded-3xl h-full p-4 flex gap-5 bg-[#FFFFFF]">
                              <div className="rounded-2xl overflow-hidden w-[36%] h-full bg-[#F3EFEE] flex justify-center items-center">
                                    <img className="w-full h-full object-cover" src={item.image} loading="lazy" alt="Loading Image......" />
                              </div>
                              <div className="bg-[#F3EFEE]/50 backdrop-blur-md w-[64%] h-[90%] flex items-center flex-col gap-3 rounded-2xl  p-3">
                                    <div className="w-full relative mt-2">
                                          <h1 className="text-[#3D3855] text-2xl leading-tight  font-Poppins selection:bg-white">{item.title.substring(0, 20)}</h1>
                                          <p className="font-Satoshi font-xs mt-5 bg-[#d4d4e9] text-[#675d98] rounded-full p-1 text-center">{item.category.toLowerCase()}</p>
                                    </div>
                                    <div className="w-full flex justify-between items-center mt-3">
                                          <h1 className="text-[#3D3857] text-2xl font-Poppins font-bold">${item.price}</h1>
                                          <Link to={`/view/${item.id}`} className="bg-[#3D3855] text-white text-xs px-3 py-2 text-center rounded-2xl font-Satoshi">
                                                View
                                          </Link>
                                    </div>
                              </div>
                        </div>
                  );
            })
      ) : (
            <Loader />
      );
}

export default Card;
