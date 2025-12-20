import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-semibold text-lg">
          Sam Little
        </Link>

        <div className="space-x-6 text-sm text-gray-600">
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
