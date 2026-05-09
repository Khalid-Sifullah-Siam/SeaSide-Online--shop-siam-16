import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Brand / About */}
        <div>
          <h1 className="text-2xl font-bold text-orange-500 mb-3">
            SeaSide
          </h1>
          <p className="text-gray-400 text-sm leading-6">
            Your trusted ecommerce platform for quality products at the best price.
            We deliver happiness to your doorstep.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Email: support@seaside.com</li>
            <li>WhatsApp: +880 1754679809</li>
            <li>Phone: +880 1924657686</li>
          </ul>
        </div>

        {/* Social + Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>

          {/* Social Icons */}
          <div className="flex gap-4 mb-5">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Policy Links */}
          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <Link href="/privacy" className="hover:text-orange-400 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-orange-400 transition">
              Terms & Conditions
            </Link>
            <Link href="/refund" className="hover:text-orange-400 transition">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} SeaSide. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;