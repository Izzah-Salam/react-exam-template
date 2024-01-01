import { arrow } from "../assets/icons";

function Form() {
  return (
    <form>
      <h2 className="uppercase">Get in the know</h2>

      <div className="relative mt-5 flex gap-2">
        <input
          type="text"
          className="w-full outline-none py-2 border-b-2 border-black"
          placeholder="Enter Email"
        />
        <button className="">
          <img src={arrow} alt="" />
        </button>
      </div>
    </form>
  );
}
export default Form;
