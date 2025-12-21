type Props = {
  title: string;
  description: string;
};

export default function ProjectPanel({ title, description }: Props) {
  return (
    <div className="min-w-[80vw] snap-center rounded-2xl border p-8">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-4 text-gray-600">{description}</p>
    </div>
  );
}

