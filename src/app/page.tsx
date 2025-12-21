import Link from "next/link";
import GitHubActivity from "@/components/GitHubActivity";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <section className="space-y-10">

      {/* Hero */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-4xl">
          I build intelligent software products that combine data,
          machine learning, and real-world user needs.
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          I’m a product-minded engineer with a first-class bachelor’s degree.
          I design, build, test, and iterate software systems — from SaaS
          platforms to data-driven tools — with a strong focus on usability
          and impact.
        </p>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/samlittle92"
            target="_blank"
            className="
              inline-flex items-center gap-2
              rounded-full border border-gray-300
              px-5 py-2 text-sm font-medium
              text-gray-700
              hover:bg-gray-100 transition
            "
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </Link>
        </div>
      </div>

      {/* GitHub activity */}
      <GitHubActivity />

    </section>
  );
}
