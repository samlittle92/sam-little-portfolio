import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function GitHubActivity() {
  return (
    <section className="space-y-6 rounded-2xl bg-white p-10 shadow-[0_1px_3px_rgba(0,0,0,0.06)] ring-1 ring-gray-200/60">
      <h2 className="text-xl font-semibold">
        Building consistently
      </h2>

      <p className="text-gray-600 max-w-3xl">
        I build in public. This portfolio evolves through regular,
        intentional commits as I design and ship software.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4">

        <Link
          href="https://github.com/samlittle92"
          target="_blank"
          className="
            inline-flex items-center gap-2
            rounded-full border border-gray-300
            px-6 py-2 text-sm font-medium
            text-gray-700
            hover:bg-gray-100 transition
          "
        >
          <FaGithub className="h-4 w-4" />
          GitHub
        </Link>
      </div>

      {/* GitHub contribution squares */}
      <div className="rounded-xl border border-gray-100 bg-white p-4">
        <img
          src="https://ghchart.rshah.org/samlittle92"
          alt="GitHub contribution squares"
          className="w-full"
        />
      </div>

    </section>
  );
}
