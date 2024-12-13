import FooterColumn from "./FooterColumn";
import FooterServices from "./FooterServices";
import footerColumns from "./FooterColumns";
import logo from "../../assets/navbar/amazon-logo.png";

function Footer() {
  return (
    <footer className="bg-amazon-light mt-auto">
      <div className="w-full max-w-screen-xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterColumn
            title={footerColumns.getToKnow.title}
            links={footerColumns.getToKnow.links}
          />
          <FooterColumn
            title={footerColumns.connect.title}
            links={footerColumns.connect.links}
          />
          <FooterColumn
            title={footerColumns.makeMoney.title}
            links={footerColumns.makeMoney.links}
          />
          <FooterColumn
            title={footerColumns.letUsHelp.title}
            links={footerColumns.letUsHelp.links}
          />
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <img src={logo} alt="Amazon Logo" className=" h-6 mx-auto mb-4" />
          <div className="flex justify-center space-x-4 mb-4">
            <button className="text-sm border-2 rounded-sm p-2 border-gray-600 text-gray-300 hover:text-white flex items-center space-x-1">
              <span>🌐</span>
              <span>English</span>
            </button>
            <button className="text-sm border-2 rounded-sm p-2 border-gray-600 text-gray-300 hover:text-white flex items-center space-x-1">
              <span>🇮🇳</span>
              <span>India</span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-amazon p-8">
        <FooterServices />
      </div>
    </footer>
  );
}

export default Footer;
