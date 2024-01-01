import User from "../assets/images/user.png";
function Product({ product }) {
  return (
    <div className=" max-w-[14rem]">
      <img
        src={product.image}
        className="max-w-[10rem] object-cover object-top mx-auto aspect-square"
        alt=""
      />
      <div className="text-center mt-2 space-y-1 P">
        <h3 className=" font-bold line-clamp-1">{product.title}</h3>
        <p className=" text-blue-100">$ {product.price}</p>
      </div>
    </div>
  );
}
export default Product;
