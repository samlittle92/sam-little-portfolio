import ProjectPanel from "@/components/ProjectPanel";

export default function ProjectsScroller() {
  return (
    <div
      className="
        flex gap-10 overflow-x-auto
        scroll-smooth snap-x snap-mandatory
        pb-6
      "
    >
      <ProjectPanel
        title="Reading Comprehension Assistant"
        description="An AI-powered tool designed, tested, and refined with real teachers to generate and reading comprehension tasks."
      />

      <ProjectPanel
        title="Formative Assessment Platform"
        description="A lightweight SaaS tool that generates formative assessments from learning objectives and student performance data."
      />

      <ProjectPanel
        title="Student Performance Predictor"
        description="A machine learning model predicting exam outcomes based on attendance, study habits, and engagement metrics."
      />
    </div>
  );
}
