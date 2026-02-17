import ProjectPanel from "@/components/ProjectPanel";

export default function ProjectsPage() {
  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-20">

        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Projects
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Selected systems spanning structured analysis, applied machine learning,
            and production-focused AI development.
          </p>
        </div>

        {/* Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <ProjectPanel
            title="Root Cause Analysis System"
            status="Completed"
            description="A structured diagnostic framework designed to identify, analyse, and resolve complex system-level failures."
            tags={["Systems Design", "Analysis", "Engineering"]}
            link="/projects/rca"
          />

          <ProjectPanel
            title="Enterprise AI System"
            status="In Development"
            description="A production-oriented AI system including model training, architecture design, data pipelines, and deployment planning."
            tags={["Machine Learning", "Architecture", "Deployment"]}
            link="/projects/enterprise-ai"
          />

          <ProjectPanel
            title="Explainable Classification Model"
            status="Completed"
            description="Supervised ML model with SHAP-based interpretability and API-ready deployment structure."
            tags={["Scikit-learn", "SHAP", "FastAPI"]}
            link="/projects/explainable-ml"
          />

        </div>

      </div>
    </section>
  );
}
