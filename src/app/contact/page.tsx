import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="max-w-3xl space-y-8">
      <h1 className="text-4xl font-bold tracking-tight">
        Contact
      </h1>

      <p className="text-lg text-gray-600 leading-relaxed">
        I’m open to opportunities, collaborations, and conversations around
        software, data, and applied AI. The best way to reach me is via email
        or GitHub.
      </p>

      <div className="space-y-4">
        {/* Email */}
        <p className="text-gray-700">
          <strong>Email:</strong>{" "}
          <a
            href="samlittle92@icloud.com"
            className="underline hover:text-gray-900"
          >
            samlittle92@icloud.com
          </a>
        </p>

        {/* Links */}
        <div className="flex gap-4">
          <Link
            href="https://github.com/samlittle92"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border
                       border-gray-300 px-5 py-2 text-sm hover:bg-gray-100 transition"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
