import Form from "./Form";
import FooterLinks from "./FooterLinks";
import Visa from "../assets/images/visa.png";
import Master from "../assets/images/master.png";
import Paypal from "../assets/images/paypal.png";
import Electron from "../assets/images/electron.png";

function Footer() {
  return (
    <div className="container py-5">
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
        <FooterLinks
          title={"Company Info"}
          links={["About Us", "Latest Posts", "Contact Us", "Shop"]}
        />
        <FooterLinks
          title={"Help Links"}
          links={["Tracking", "Order Status", "Delivery Shipping Info", "FAQ"]}
        />
        <FooterLinks
          title={"Useful Links"}
          links={["Special Offers", "Gift Cards", "Advetising", "Terms of Use"]}
        />

        <Form />
      </div>

      <div className="copyright mt-5 py-4">
        <p className=" text-sm">
          © 2020 FasTech Systems Private Limited Sukkur,{" "}
        </p>

        <div className="flex flex-col sm:flex-row justify-between mt-4 gap-5">
          <p className="text-sm">Privacy Policy Terms & Conditions</p>

          <div className="flex gap-1">
            <img src={Visa} alt="" />
            <img src={Master} alt="" />
            <img src={Paypal} alt="" />
            <img src={Electron} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
