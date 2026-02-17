import Link from "next/link";

export default function RCACaseStudy() {
  return (
    <section className="pt-16 pb-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-20">

        {/* Header */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Reading Comprehension Assistant (RCA)
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed">
            A research-backed generative AI system designed to reduce planning
            workload in multilingual primary classrooms through structured
            prompt engineering and controlled system design.
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            {[
              "Generative AI",
              "AI System Architecture",
              "Prompt Engineering",
              "Human-Centred Design",
              "Usability Testing",
              "Formative Assessment",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-6">
            <Link
              href="https://github.com/samlittle92/reading-comprehension-assistant"
              target="_blank"
              className="text-sm font-medium underline"
            >
              View GitHub Repository →
            </Link>
          </div>
        </div>

        {/* Problem Context */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Problem Context</h2>
          <p className="text-gray-700 leading-relaxed">
            Teachers in multilingual primary classrooms face significant workload
            pressure when creating differentiated reading materials. Producing
            levelled passages, structured comprehension questions, and printable
            worksheets is time-intensive and often repetitive.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The RCA was developed to reduce this burden while preserving teacher
            agency, curriculum alignment, and pedagogical control.
          </p>
        </div>

        {/* System Overview */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">System Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            The system integrates a large language model through a structured
            prompt engineering layer to generate:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Levelled reading passages</li>
            <li>Editable comprehension questions</li>
            <li>Differentiated difficulty variants</li>
            <li>Print-ready worksheet exports (PDF)</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Development followed a structured Software Development Life Cycle
            (SDLC) approach, incorporating iterative refinement based on teacher
            usability feedback.
          </p>
        </div>

        {/* Architecture */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Architecture</h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Streamlit frontend interface</li>
            <li>LLM API integration via controlled prompt layer</li>
            <li>Parameterised generation logic</li>
            <li>Session-based state management</li>
            <li>Automated PDF export module</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Prompt templates were engineered to constrain output structure,
            enforce readability levels, and maintain instructional clarity.
            System behaviour was designed to prioritise reliability and
            explainability over unrestricted generation.
          </p>
        </div>

        {/* Evaluation */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Evaluation & Validation</h2>

          <p className="text-gray-700 leading-relaxed">
            The RCA was evaluated through structured usability testing with
            five practising primary educators. Feedback focused on:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Efficiency improvements in lesson planning</li>
            <li>Clarity and appropriateness of generated outputs</li>
            <li>Curriculum alignment</li>
            <li>Perceived teacher control and trust</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Results indicated measurable planning time reductions and strong
            classroom applicability, validating the system’s design decisions.
          </p>
        </div>

        {/* Screenshots Section */}
        <div className="space-y-10">
          <h2 className="text-2xl font-semibold">System Demonstration</h2>

          <div className="space-y-4">
            <img
              src="/rca-dashboard.png"
              alt="RCA Teacher Dashboard"
              className="rounded-xl border border-gray-200"
            />
            <p className="text-sm text-gray-600">
              Upon login, teachers access a structured dashboard that centralises
                passage generation tools and previously created materials. This
                interface was designed to reflect real classroom workflows rather
                than experimental AI tooling.
            </p>
          </div>

          <div className="space-y-4">
            <img
              src="/rca-create-passage.png"
              alt="Create a reading passage."
              className="rounded-xl border border-gray-200"
            />
            <p className="text-sm text-gray-600">
              Teachers can configure passage generation using structured parameters,
            including grade level, differentiation tier (Support, Core, Extension),
            approximate length, and curriculum-aligned learning objectives.Structured LLM output including levelled passage and comprehension
              questions.
              These inputs are translated into a controlled prompt structure that
                constrains model behaviour while preserving creativity. The goal is
                not unrestricted generation, but reliable and pedagogically aligned
                output.
            </p>
          </div>

          <div className="space-y-4">
            <img
              src="/rca-differentiation.png"
              alt="Create Reading Comprehension Question Interface"
              className="rounded-xl border border-gray-200"
            />
            <p className="text-sm text-gray-600">
               Generated comprehension questions remain fully editable, allowing
                teachers to refine wording, adjust cognitive demand, or align content
                more precisely with lesson objectives.This design choice reinforces teacher agency and positions the AI as a
                support tool rather than an automated decision-maker. The system
                prioritises collaboration between human expertise and generative
                assistance.
            </p>
          </div>
        </div>

        {/* Demo Section */}
        <div className="pt-12 border-t border-gray-200 space-y-4">
          <h2 className="text-2xl font-semibold">Live Demonstration</h2>
          <p className="text-gray-700 leading-relaxed">
            A controlled live demonstration of the system is available upon
            request. Please get in touch for access.
          </p>
        </div>

      </div>
    </section>
  );
}
