import Link from "next/link";
import Navbar from "../components/Navbar";
import './styles.css'; 
export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="custom-container">
        <h1>Contact Us</h1>
        <p>We would love to hear from you!</p>
        
        <Link href="/" className="link-button">
          Go back to Home
        </Link>
      </div>
    </>
  );
}