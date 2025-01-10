import { useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loader from "./Loader";
import { toast } from "react-toastify";
import { motion } from "motion/react";
function View() {
      const navigate = useNavigate();
      const { product, setProduct } = useContext(ProductContext);
      const { id } = useParams();
      const goBack = () => {
            navigate("/");
      };
      const removeProduct = (productId) => {
            const newData = product.filter((item) => {
                  if (item.id !== productId) {
                        return item;
                  }
            });
            localStorage.setItem("products", JSON.stringify(newData));
            setProduct(newData);
            navigate(-1);
            toast.warning("Product Deleted!");
      };
      return product ? (
            product.map((item, index) => {
                  if (id == item.id) {
                        return (
                              <div key={index} className="w-full min-h-screen flex items-center justify-center flex-col">
                                    <div className="w-full h-1/2 bg-[#FFFFFF]  relative">
                                          <button onClick={goBack}>
                                                <motion.div whileTap={{ scale: 0.6 }} className="rounded-full bg-black text-white w-11 h-11 flex items-center justify-center fixed z-20 top-4 left-4">
                                                      <IoIosArrowBack size={"1.3rem"} />
                                                </motion.div>
                                          </button>
                                          <img className="w-full h-full object-center" src={item.image} alt="" />
                                    </div>
                                    <div className="w-full min-h-full mt-5 flex items-center justify-center overflow-hidden rounded-3xl">
                                          <div className="bg-[#F5F5F5]/40 backdrop-blur-3xl w-full h-full flex items-center flex-col gap-6 rounded-3xl p-4">
                                                <div className="w-full  relative mt-2 p-5">
                                                      <h1 className="text-[#3D3855] text-[2rem] font-Poppins leading-none">{item.title}</h1>
                                                      <p className="font-Satoshi text-lg mt-5">{item.description}</p>
                                                </div>
                                                <div className="w-full flex justify-between items-center mt-3">
                                                      <h1 className="text-[#3D3857] text-[2rem] font-Poppins font-bold w-[60%] pl-5">${item.price}</h1>
                                                      <div className="flex items-center justify-between gap-4 flex-shrink-0 w-[45%]">
                                                            <Link to={`/view/${item.id}/edit`}>
                                                                  <button className="bg-blue-100 text-blue-700 text-lg px-3 py-2 text-center rounded-2xl font-Satoshi">Edit</button>
                                                            </Link>
                                                            <button onClick={() => removeProduct(item.id)} className="bg-red-100 text-red-700 text-lg px-3 py-2 text-center rounded-2xl font-Satoshi">
                                                                  Delete
                                                            </button>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        );
                  }
            })
      ) : (
            <Loader />
      );
}

export default View;
