import { IoSearch } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
function Navbar() {
      const { product } = useContext(ProductContext);
      const { search, pathname } = useLocation();
      let distinct_category = product && product.reduce((acc, cv) => [...acc, cv.category.toLowerCase()], []);
      const category = [...new Set(distinct_category)];
      return (
            <div className="w-full container px-6 py-4">
                  <div className="w-fit py-5">
                        <h1 className="text-4xl  font-Poppins text-[#3D3855]">Best Products</h1>
                        <h2 className="opacity-90 text-lg font-Satoshi text-[#3D3855]">Perfect Choice!</h2>
                  </div>
                  <div className="relative flex gap-4 items-center justify-start">
                        <motion.div whileTap={{ scale: 0.6 }} className="absolute left-3">
                              <IoSearch />
                        </motion.div>
                        <input className="w-[90%] pl-10 py-2 rounded-full font-medium outline-black" placeholder="Search" type="text" />
                        <motion.div whileTap={{ scale: 0.6 }} className="rounded-full flex items-center justify-center">
                              <Link to="/create">
                                    <IoMdAddCircle size={"2.5rem"} />
                              </Link>
                        </motion.div>
                  </div>
                  <div className="w-full py-5 flex gap-2 items-center mt-2 flex-wrap">
                        {pathname != "/" ||
                              (search.length > 0 && (
                                    <Link className="bg-[#3D3855] text-white text-sm px-4 py-2 text-center rounded-3xl text-nowrap hover:bg-transparent hover:border-[#3D3855] hover:border-solid hover:border-[.1px] hover:text-[#3D3855] transition-all duration-300 " to="/">
                                          All
                                    </Link>
                              ))}
                        {category.map((item, index) => {
                              return (
                                    <Link className="bg-[#3D3855] text-white text-sm px-4 py-2 text-center rounded-3xl text-nowrap hover:bg-transparent hover:border-[#3D3855] hover:border-solid hover:border-[.1px] hover:text-[#3D3855] transition-all duration-300 " to={`/?category=${item.toLowerCase()}`} key={index}>
                                          {item}
                                    </Link>
                              );
                        })}
                  </div>
            </div>
      );
}

export default Navbar;
