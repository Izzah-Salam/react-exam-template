import { loop, menu, thumb, truck, tyre } from "../assets/icons";
import Service from "./Service";

function Services() {
  return (
    <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 py-10">
      <Service
        icon={truck}
        title={"FREE SHIPPING"}
        text={"Enjoy free shipping on all orders above $100"}
      />
      <Service
        icon={tyre}
        title={"SUPPORT 24/7"}
        text={"Our support team is there to help you for queries"}
      />
      <Service
        icon={loop}
        title={"30 DAYS RETURN"}
        text={"Simply return it within 30 days for an exchange."}
      />
      <Service
        icon={thumb}
        title={"100% PAYMENT SECURE"}
        text={"Our payments are secured with 256 bit encryption"}
      />
    </div>
  );
}
export default Services;
