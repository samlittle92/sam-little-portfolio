export default function AboutPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
      {/* Left: Copy */}
      <div className="md:col-span-2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          About
        </h1>

        {/* Aerospace & Engineering */}
        <p className="text-lg text-gray-600 leading-relaxed">
          My professional background began in aerospace engineering, where I
          entered the industry through an apprenticeship with GE Aviation as an
          aircraft technician. Alongside hands-on technical work, I completed
          NVQ Levels 1, 2, and 3, a BTEC Diploma, and an HNC in Aerospace
          Engineering, developing a strong foundation in mechanical systems,
          documentation, and safety-critical processes.
        </p>

        {/* Quality Engineering */}
        <p className="text-lg text-gray-600 leading-relaxed">
          In addition to aircraft maintenance and assembly, I worked in quality
          engineering roles supporting large commercial aerospace programmes,
          including the Airbus A350. I operated within highly regulated
          environments, working to ISO and AS/EN aerospace standards and
          completing First Article Inspections in line with AS9102
          requirements.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed">
          These responsibilities included verifying part conformity,
          interpreting engineering drawings, validating measurement data, and
          ensuring full traceability across complex assemblies. I worked closely
          with production, engineering, and quality teams to resolve
          non-conformances and support corrective actions across multiple
          aircraft platforms.
        </p>

        {/* Transition into Education */}
        <p className="text-lg text-gray-600 leading-relaxed">
          I later transitioned into international education, beginning as a
          primary homeroom teacher before progressing into coordination roles,
          Head of Department positions, and ultimately senior leadership.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed">
          I currently serve as Head of Student Welfare at an international
          school, working at a systems and leadership level to support student
          wellbeing, pastoral structures, and cross-departmental processes.
          These roles strengthened my ability to work across technical and
          non-technical stakeholders, manage complexity, and design systems that
          function in real-world environments.
        </p>

        {/* Education + CS */}
        <p className="text-lg text-gray-600 leading-relaxed">
          Alongside my leadership work in education, I completed an honours
          degree in computer science. My academic and independent projects focus
          on building software, data, and machine-learning systems —
          particularly in the EdTech and business analytics space — where
          clarity, reliability, and interpretability matter.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed">
          Across engineering, education, and software development, a consistent
          theme runs through my work: understanding complex systems, working to
          clear standards, and building solutions that are practical,
          explainable, and genuinely useful.
        </p>
      </div>

      {/* Right: Image */}
      <div className="flex justify-center md:justify-end">
        <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-gray-200 bg-gray-100">
          <img
            src="/profile.jpg"
            alt="Profile portrait"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
