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
          I’m a product-minded engineer with an honours degree in computer science. I build end-to-end software systems, from SaaS platforms to applied machine learning and analytics tools; with a focus on usability, interpretability, and real-world business impact.
        </p>

      </div>

      {/* GitHub activity */}
      <GitHubActivity />

    </section>
  );
}
