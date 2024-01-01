import { useExamContext } from "../context/ExamContext";
import Product from "./Product";

function TopSellers() {
  const { products } = useExamContext();

  const topFiveProducts = products.slice(0, 5);

  return (
    <div className="container py-5 my-5">
      <div className="text-center mb-5">
        <h2 className=" text-3xl mb-3">Top Sellers</h2>
        <p className="text-gray-100">Browse our top-selling products</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between py-4 gap-y-10">
        {topFiveProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
export default TopSellers;
