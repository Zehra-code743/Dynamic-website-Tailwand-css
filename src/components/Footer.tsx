import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer-parent bg-gray-800 h-60 text-white py-6 mt-auto">
      <ul className="footer-child text-center space-y-4">
        <li className="text-lg">
          A perfume is a liquid mixture used to emit a pleasant odour. It is formed from fragrant essential oils derived from plants and spices or synthetic aromatic compounds.
        </li>
        <li className="facebook">
          Facebook:{" "}
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500"
          >
            Visit our Facebook page
          </Link>
          <FaFacebook size={20} className="inline ml-2 text-pink-500" />
        </li>
      </ul>
    </div>
  );
}
