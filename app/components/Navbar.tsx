import Link from "next/link";
import './styles.css'; // Import your custom CSS file

const Navbar = () => {
  return (
    <nav>
      <ol className="nav-list">
        <li className="nav-item">
          <Link href="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact" className="nav-link">
            Contact me
          </Link>
        </li>
      </ol>
      <br />
    </nav>
  );
};

export default Navbar;