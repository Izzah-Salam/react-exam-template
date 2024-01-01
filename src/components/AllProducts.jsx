import Product from "./Product";

function AllProducts() {
  return (
    <div className="container py-10 ">
      <div className="text-center">
        <h2 className=" text-4xl">Discover New Arrivals</h2>
        <p className=" text-gray-100 mt-2">Recently added shirt!</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center py-4 mt-5">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
export default AllProducts;
