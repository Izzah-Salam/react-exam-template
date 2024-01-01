import Promo from "./Promo";

function Promos() {
  return (
    <div className="container grid md:grid-cols-2 gap-4 py-5 my-4">
      <Promo
        title={"PEACE OF MIND"}
        description={
          "A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind."
        }
      />
      <Promo
        title={"BUY 2 GET 1 FREE"}
        description={
          "End of season sale. Buy any 2 items of your choice and get 1 free."
        }
      />
    </div>
  );
}
export default Promos;
