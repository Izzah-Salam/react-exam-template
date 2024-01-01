function Promo({ title, description }) {
  return (
    <div className="space-y-5 bg-black text-white p-16 text-center">
      <h2 className=" text-3xl ">{title}</h2>
      <p>{description}</p>
      <button className="py-2 px-4 bg-white text-blue-100">Buy Now</button>
    </div>
  );
}
export default Promo;
