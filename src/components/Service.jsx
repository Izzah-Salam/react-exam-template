import { user } from "../assets/icons";

function Service({ icon, title, text }) {
  return (
    <div className="flex items-start max-w-[20rem] gap-3">
      <img src={icon} alt="" />
      <div>
        <h2 className=" font-bold">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
export default Service;
