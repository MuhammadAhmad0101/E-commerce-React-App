import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { nanoid } from "nanoid";
import { ProductContext } from "../utils/Context";
import { toast, Zoom } from "react-toastify";
import { motion } from "motion/react";
const Form = () => {
      const { product, setProduct } = useContext(ProductContext);
      const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");
      const [price, setPrice] = useState("");
      const [image, setImage] = useState("");
      const [category, setCategory] = useState("");
      // ?Collecting Data
      const products = {
            id: nanoid(),
            title,
            description,
            price,
            image,
            category,
      };
      const handleSubmit = (e) => {
            e.preventDefault();
            if (title.trim().length < 3 || description.trim().length < 5 || price < 1 || image.trim().length < 5 || category.trim().length < 3) {
                  toast.error("Please enter valid data", { autoClose: 3000, transition: Zoom });
                  return;
            }
            setProduct([...product, products]);
            localStorage.setItem("products", JSON.stringify([...product, products]));
            navigate(`/?category=${products.category}`);
            toast.success("Product Added!");
      };
      const navigate = useNavigate();
      const goBack = () => {
            navigate(-1);
            navigate("/");
      };

      return (
            <form className="w-screen h-screen flex justify-center items-center" action="" onSubmit={handleSubmit}>
                  <div className="w-full h-full flex flex-col bg-zinc-100 rounded-lg p-4 shadow-sm relative">
                        <button onClick={goBack}>
                              <motion.div whileTap={{ scale: 0.6 }} className="rounded-full bg-black text-white w-11 h-11 flex items-center justify-center absolute z-20 top-4 left-4">
                                    <IoIosArrowBack size={"1.3rem"} />
                              </motion.div>
                        </button>
                        <h2 className="text-black font-bold text-lg mt-24">Add a new Product</h2>
                        <div className="mt-4">
                              <label className="text-black" htmlFor="title">
                                    Title
                              </label>
                              <motion.input whileFocus={{ scale: 1.058 }} onChange={(e) => setTitle(e.target.value)} value={title} name="title" id="title" placeholder="Product's Title" className="w-full bg-white rounded-md border-gray-300 outline-black p-3 text-lg text-black" type="text" />
                        </div>
                        <div className="mt-4">
                              <label className="text-black" htmlFor="description">
                                    Discription
                              </label>
                              <motion.textarea whileFocus={{ scale: 1.058 }} onChange={(e) => setDescription(e.target.value)} value={description} name="description" placeholder="Product Discription goes here..." className="w-full outline-black bg-white rounded-md border-gray-300 p-3 text-lg text-black px-2 py-1" id="description" />
                        </div>
                        <div className="mt-4 flex flex-row space-x-2">
                              <div className="flex-1">
                                    <label className="text-black" htmlFor="image">
                                          Image url
                                    </label>
                                    <motion.input whileFocus={{ scale: 1.058 }} onChange={(e) => setImage(e.target.value)} value={image} placeholder="image url" className="w-full outline-black invalid:outline-red-900 bg-white rounded-md border-gray-300 p-3 text-lg text-black px-2 py-1" id="image" type="url" />
                              </div>
                        </div>
                        <div className="mt-4 flex flex-row space-x-2">
                              <div className="flex-1">
                                    <label className="text-black" htmlFor="zip">
                                          Price
                                    </label>
                                    <motion.input whileFocus={{ scale: 1.058 }} onChange={(e) => setPrice(e.target.value)} value={price} placeholder="$" className="w-full bg-white rounded-md border-gray-300 p-3 text-lg outline-black text-black px-2 py-1" id="zip" type="number" />
                              </div>
                              <div className="flex-1">
                                    <label className="text-black" htmlFor="category">
                                          Category
                                    </label>
                                    <motion.input whileFocus={{ scale: 1.058 }} onChange={(e) => setCategory(e.target.value)} value={category} placeholder="category" className="w-full bg-white rounded-md border-gray-300 p-3 text-lg outline-black text-black px-2 py-1" id="category" type="text" />
                              </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                              <motion.button whileTap={{ scale: 2 }} className="bg-green-200 rounded-lg text-green-800  px-5 py-2" type="submit">
                                    Add Now
                              </motion.button>
                        </div>
                  </div>
            </form>
      );
};

export default Form;
