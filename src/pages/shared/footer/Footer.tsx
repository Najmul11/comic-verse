import { FaFacebook, FaTwitter, FaDiscord } from "react-icons/fa";
import BrandLogo from "../../../assets/images/BrandLogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="shadow-inner dark:bg-black dark:text-white ">
      <footer className="footer footer-center p-10">
        <aside>
          <img src={BrandLogo} alt="" className="dark:bg-orange-500" />
          <p className="font-bold">
            COMIC Industries Ltd. <br />
          </p>
          <p>Copyright © {currentYear} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-8 text-2xl dark:text-orange-500">
            <a href="https://twitter.com/" target={"_blank"} rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://youtube.com/" target={"_blank"} rel="noreferrer">
              <FaDiscord />
            </a>
            <a href="https://facebook.com/" target={"_blank"} rel="noreferrer">
              <FaFacebook />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
