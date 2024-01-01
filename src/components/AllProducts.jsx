import axios from "axios";
import { useExamContext } from "../context/ExamContext";
import Product from "./Product";
import { APIs } from "../const/APIs";
import { useEffect } from "react";

function AllProducts() {
  const { products, setProducts } = useExamContext([]);

  async function getAllProducts() {
    const res = await axios.get(APIs.PRODUCTS.GET_ALL_PRODUCTS);
    setProducts(res.data);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="container py-10 ">
      <div className="text-center">
        <h2 className=" text-4xl">Discover New Arrivals</h2>
        <p className=" text-gray-100 mt-2">Recently added shirt!</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center py-4 mt-5 gap-y-10">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
export default AllProducts;
