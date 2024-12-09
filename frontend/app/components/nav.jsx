import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="flex flex-row justify-between items-center">
      <Link href="/">
        {/* <Image src="/logo.png" alt="BookEase Logo" width={100} height={100} />
         */}
         BOOKEASE
      </Link>
      <ul className="flex space-x-6">
        <li>
          <Link href="/how-it-works">How It Works</Link>
        </li>
        <li>
          <Link href="/features">Features</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/search">Search</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}
