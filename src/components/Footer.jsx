const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 text-center">
      {/* Logo */}
      <div className="text-xl font-bold text-gray-800 mb-4">
        <a href="/">Logo</a>
      </div>

      {/* Navbar */}
      <nav className="mb-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <a
              href="/"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/shop"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="/category"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Category
            </a>
          </li>
        </ul>
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="#"
          className="text-gray-800 hover:text-blue-600"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="#"
          className="text-gray-800 hover:text-blue-600"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          className="text-gray-800 hover:text-blue-600"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Copyright */}
      <div className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
