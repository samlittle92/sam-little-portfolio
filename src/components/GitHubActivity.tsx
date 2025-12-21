import Link from "next/link";

export default function GitHubActivity() {
  return (
    <section className="rounded-2xl border border-gray-200 p-8 space-y-6 bg-white">
      <h2 className="text-xl font-semibold">
        Building consistently
      </h2>
      <p className="text-gray-600 max-w-3xl">
        I build in public. This portfolio evolves through regular,
        intentional commits as I design and ship software.
      </p>
      <div className="flex gap-4">
        <Link
          href="/projects"
          className="rounded-full border border-gray-300 px-6 py-2 text-sm
                     hover:bg-gray-100 transition"
        >
          Git Hub # add github link here
        </Link>
        </div>
        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white p-4">
            <img
          src="https://ghchart.rshah.org/samlittle92"
          alt="GitHub contribution squares"
          className="w-full"
        />
        
        </div>
    </section>
  );
}
