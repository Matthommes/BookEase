import brandLogo from "../../public/brand-logo.png";
import Link from "next/link";
import Image from "next/image";


export default function Verify() {
  return (
    <main>
      <Link href="/">
        <div className="flex justify-center items-center">
          <Image
            src={brandLogo}
            alt="BookSmartly Logo"
            className="h-auto w-16 sm:w-20 lg:w-24 mb-10"
            priority
          />
        </div>
      </Link>
      <h1>Confirm your Registration</h1>
      <p>We have sent an email to you!</p>
    </main>
  );
}
