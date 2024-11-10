import Link from "next/link";
import Navbar from './components/Navbar';
import './styles.css'; // Import your custom CSS file

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="custom-container">
        <h1>Welcome to the Home Page</h1>
        <p>This is a simple home page styled with custom CSS.</p>
        
        <Link href="/about">
          <p className="link-button">
            Learn more about us
          </p>
        </Link>
      </div>
    </>
  );
}