type Props = {
  title: string;
  description: string;
};

export default function ProjectPanel({ title, description }: Props) {
  return (
    <article
      className="
        snap-start
        min-w-[85vw] max-w-[85vw]
        rounded-2xl overflow-hidden
        border border-gray-200
        bg-white
      "
    >
      {/* Visual */}
      <div className="h-[420px] bg-gray-200 flex items-center justify-center text-gray-400">
        Project preview
      </div>

      {/* Text */}
      <div className="p-8 max-w-3xl">
        <h2 className="text-2xl font-semibold">
          {title}
        </h2>

        <p className="mt-3 text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}
