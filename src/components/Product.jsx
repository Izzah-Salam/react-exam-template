import User from "../assets/images/user.png";
function Product() {
  return (
    <div className=" max-w-[14rem]">
      <img src={User} alt="" />
      <div className="text-center mt-2 space-y-1">
        <h3 className=" font-bold ">Plain White shirt</h3>
        <p className=" text-blue-100">$ 29.00</p>
      </div>
    </div>
  );
}
export default Product;
