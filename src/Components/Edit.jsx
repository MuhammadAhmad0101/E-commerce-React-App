import { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { IoIosArrowBack } from "react-icons/io";
const Edit = () => {
      const navigate = useNavigate();
      const { id } = useParams();
      const { product, setProduct } = useContext(ProductContext);
      const editAbleItem = product.find((item) => {
            if (id == item.id) {
                  return item;
            }
      });
      //! Updating Data-----------
      const [title, setTitle] = useState(editAbleItem.title);
      const [description, setDescription] = useState(editAbleItem.description);
      const [price, setPrice] = useState(editAbleItem.price);
      const [image, setImage] = useState(editAbleItem.image);
      const [category, setCategory] = useState(editAbleItem.category);
      // ? Changed Data Being Wraped into one Object-----------
      const products = {
            id: editAbleItem.id,
            title,
            description,
            price,
            image,
            category,
      };
      // ! Main Function which will run when user submit form
      const handleChanges = (e) => {
            e.preventDefault();
            const updatedProducts = product.map((item) => (item.id == editAbleItem.id ? products : item));
            setProduct(updatedProducts);
            localStorage.setItem("products", JSON.stringify(updatedProducts));
            navigate(`/view/${products.id}`);
            toast.info("Product Updated!");
      };
      const goBack = () => {
            navigate(-1);
      };
      return (
            <form className="w-screen h-screen flex justify-center items-center" action="" onSubmit={handleChanges}>
                  <div className="w-full h-full flex flex-col bg-zinc-100 rounded-lg p-4 shadow-sm relative">
                        <button onClick={goBack}>
                              <div className="rounded-full bg-black text-white w-11 h-11 flex items-center justify-center absolute z-20 top-4 left-4">
                                    <IoIosArrowBack size={"1.3rem"} />
                              </div>
                        </button>
                        <h2 className="text-black font-bold text-lg mt-24 text-center">Edit Product</h2>
                        <div className="mt-4">
                              <label className="text-black" htmlFor="title">
                                    Title
                              </label>
                              <input onChange={(e) => setTitle(e.target.value)} value={title} name="title" id="title" placeholder="Product's Title" className="w-full bg-white rounded-md border-gray-300 p-3 text-lg text-black" type="text" />
                        </div>
                        <div className="mt-4">
                              <label className="text-black" htmlFor="description">
                                    Discription
                              </label>
                              <textarea onChange={(e) => setDescription(e.target.value)} value={description} name="description" placeholder="Product Discription goes here..." className="w-full bg-white rounded-md border-gray-300 p-3 text-lg text-black px-2 py-1" id="description" />
                        </div>
                        <div className="mt-4 flex flex-row space-x-2">
                              <div className="flex-1">
                                    <label className="text-black" htmlFor="image">
                                          Image url
                                    </label>
                                    <input onChange={(e) => setImage(e.target.value)} value={image} placeholder="image url" className="w-full bg-white rounded-md border-gray-300 p-3 text-lg text-black px-2 py-1" id="image" type="url" />
                              </div>
                        </div>
                        <div className="mt-4 flex flex-row space-x-2">
                              <div className="flex-1">
                                    <label className="text-black" htmlFor="zip">
                                          Price
                                    </label>
                                    <input onChange={(e) => setPrice(e.target.value)} value={price} placeholder="$" className="w-full bg-white rounded-md border-gray-300 p-3 text-lg text-black px-2 py-1" id="zip" type="number" />
                              </div>
                              <div className="flex-1">
                                    <label className="text-black" htmlFor="category">
                                          Category
                                    </label>
                                    <input onChange={(e) => setCategory(e.target.value)} value={category} placeholder="category" className="w-full bg-white rounded-md border-gray-300 p-3 text-lg text-black px-2 py-1" id="category" type="text" />
                              </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                              <button className="bg-white text-black rounded-md px-4 py-1 hover:bg-gray-200 hover:text-gray-900" type="submit">
                                    Save Changes
                              </button>
                        </div>
                  </div>
            </form>
      );
};

export default Edit;
