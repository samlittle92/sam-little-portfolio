import Link from "next/link";

type ProjectPanelProps = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  status: "Completed" | "In Development";
};

export default function ProjectPanel({
  title,
  description,
  tags,
  link,
  status,
}: ProjectPanelProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition duration-200">

      {/* Status Badge */}
      <div className="mb-4">
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            status === "Completed"
              ? "bg-green-100 text-green-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {status}
        </span>
      </div>

      <h3 className="text-xl font-semibold tracking-tight">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={link}
        className="inline-block mt-6 text-sm font-medium text-black hover:underline"
      >
        View case study →
      </Link>
    </div>
  );
}
