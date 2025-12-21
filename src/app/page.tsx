import Link from "next/link";
import GitHubActivity from "@/components/GitHubActivity";

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
      </div>

      {/* GitHub activity */}
      <GitHubActivity />

    </section>
  );
}
