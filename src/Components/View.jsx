import { useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loader from "./Loader";
import { toast } from "react-toastify";
function View() {
      const navigate = useNavigate();
      const { product, setProduct } = useContext(ProductContext);
      const { id } = useParams();
      const goBack = () => {
            navigate(-3);
      };
      const removeProduct = (productId) => {
            const newData = product.filter((item) => {
                  if (item.id !== productId) {
                        console.log(item);
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
                                                <div className="rounded-full bg-black text-white w-11 h-11 flex items-center justify-center fixed z-20 top-4 left-4">
                                                      <IoIosArrowBack size={"1.3rem"} />
                                                </div>
                                          </button>
                                          <img className="w-full h-full object-cover scale-75" src={item.image} alt="" />
                                    </div>
                                    <div className="w-full min-h-full mt-5 flex items-center justify-center overflow-hidden rounded-3xl">
                                          <div className="bg-[#F5F5F5]/40 backdrop-blur-3xl w-full h-full flex items-center flex-col gap-6 rounded-3xl p-4">
                                                <div className="w-full  relative mt-2 p-5">
                                                      <h1 className="text-[#3D3855] text-[2rem] font-Poppins leading-none">{item.title}</h1>
                                                      <p className="font-Satoshi text-lg mt-5">{item.description}</p>
                                                </div>
                                                <div className="w-full flex justify-around items-center mt-3 p-5">
                                                      <h1 className="text-[#3D3857] text-[3rem] font-Poppins font-bold">${item.price}</h1>
                                                      <Link to={`/view/${item.id}/edit`}>
                                                            <button className="bg-[#2563eb]/90 text-[#bae6fd] text-lg px-3 py-2 text-center rounded-2xl font-Satoshi ml-10">Edit</button>{" "}
                                                      </Link>
                                                      {/* <Link to={`/remove/${item.id}`}> */}
                                                      <button onClick={() => removeProduct(item.id)} className="bg-[#f43f5e]/90 text-[#fecdd3] text-lg px-3 py-2 text-center rounded-2xl font-Satoshi">
                                                            Delete
                                                      </button>
                                                      {/* </Link> */}
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
