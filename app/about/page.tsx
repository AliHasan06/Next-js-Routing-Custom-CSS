import Link from "next/link";
import Navbar from "../components/Navbar";
import './styles.css'; // Import your custom CSS file

export default function About() {
  return (
    <>
      <Navbar />

      <div className="custom-container">
        <h1>About Us</h1>
        <p>Learn more about our mission and values.</p>
        
        <Link href="/" className="link-button">
          Go back to Home
        </Link>
      </div>
    </>
  );
}