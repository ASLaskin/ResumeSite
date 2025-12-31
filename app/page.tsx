export default function ResumePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-6 sm:gap-8">
              <a href="#about" className="text-sm font-medium text-white relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-blue-500">
                About
              </a>
              <a
                href="/andrewResume.pdf"
                download
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                Resume
              </a>
            </div>
            <div className="flex gap-4 sm:gap-6">
              <a
                href="https://github.com/ASLaskin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/aslaskin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="max-w-5xl mx-auto px-4 sm:px-8 py-16 sm:py-32">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-medium text-blue-400 mb-4 sm:mb-6">
            Software Engineer
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
            Andrew Laskin
          </h1>
          <p className="text-base sm:text-xl text-neutral-300 leading-relaxed mb-3 sm:mb-4">
            Software Engineer at <span className="text-white font-medium">Roleo</span>. Computer Science grad from the <span className="text-white font-medium">University of Florida</span> with a focus on financial technology.
          </p>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-6 sm:mb-10">
            Miami, FL • Interested in systems engineering, algorithmic trading platforms, and full-stack development
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://linkedin.com/in/aslaskin"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-sm font-medium bg-white text-neutral-950 hover:bg-neutral-200 transition-all text-center"
            >
              Get in touch
            </a>
            <a
              href="/andrewResume.pdf"
              download
              className="px-6 py-3 text-sm font-medium border border-neutral-700 text-white hover:border-neutral-500 hover:bg-neutral-900 transition-all text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-24 border-t border-neutral-800">
        <div className="flex items-baseline justify-between mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">Experience</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-neutral-800 to-transparent ml-6 sm:ml-12"></div>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {/* Roleo */}
          <div className="group">
            <div className="flex flex-col sm:flex-row sm:gap-12">
              <div className="sm:w-48 flex-shrink-0 mb-4 sm:mb-0">
                <div className="sm:sticky sm:top-8">
                  <p className="text-sm font-bold text-white mb-1">Roleo</p>
                  <p className="text-xs text-neutral-500">Jun 2025 – Present</p>
                  <div className="mt-2 sm:mt-4 w-12 h-px bg-blue-500"></div>
                </div>
              </div>
              <div className="flex-1 pb-8 sm:border-l border-neutral-800 sm:pl-12 group-hover:border-neutral-700 transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Software Engineer</h3>
                <p className="text-sm text-neutral-400 mb-4 sm:mb-6">Gainesville, FL</p>
                <ul className="space-y-3 sm:space-y-4 text-sm text-neutral-300 leading-relaxed">
                  <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-blue-500">
                    Engineered a vector embedding based matching algorithm using RAG, enabling 700+ successful job placements and improving match relevancy for over 40 active users
                  </li>
                  <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-blue-500">
                    Architected a serverless Next.js app with MongoDB Atlas, Redis caching, and CloudFront, achieving sub 200ms API responses
                  </li>
                  <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-blue-500">
                    Developed an admin dashboard integrated with Google Analytics and AWS Lambda for real-time insights
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Purvis, Gray */}
          <div className="group">
            <div className="flex flex-col sm:flex-row sm:gap-12">
              <div className="sm:w-48 flex-shrink-0 mb-4 sm:mb-0">
                <div className="sm:sticky sm:top-8">
                  <p className="text-sm font-bold text-white mb-1">Purvis, Gray</p>
                  <p className="text-xs text-neutral-500">Jul 2025 – Dec 2025</p>
                  <div className="mt-2 sm:mt-4 w-12 h-px bg-emerald-500"></div>
                </div>
              </div>
              <div className="flex-1 pb-8 sm:border-l border-neutral-800 sm:pl-12 group-hover:border-neutral-700 transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">IT Intern</h3>
                <p className="text-sm text-neutral-400 mb-4 sm:mb-6">Gainesville, FL</p>
                <ul className="space-y-3 sm:space-y-4 text-sm text-neutral-300 leading-relaxed">
                  <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-emerald-500">
                    Automated laptop setup using Python, Playwright, and Chocolatey, reducing device setup time by 2 hours per laptop
                  </li>
                  <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-emerald-500">
                    Documented automation process for IT team adoption, improving onboarding efficiency
                  </li>
                  <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-emerald-500">
                    Maintained Windows Server and Active Directory environments with Azure integration
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Teaching Assistant */}
          <div className="group">
            <div className="flex flex-col sm:flex-row sm:gap-12">
              <div className="sm:w-48 flex-shrink-0 mb-4 sm:mb-0">
                <div className="sm:sticky sm:top-8">
                  <p className="text-sm font-bold text-white mb-1">UF</p>
                  <p className="text-xs text-neutral-500">Jan 2023 – May 2023</p>
                  <div className="mt-2 sm:mt-4 w-12 h-px bg-purple-500"></div>
                </div>
              </div>
              <div className="flex-1 pb-8 sm:border-l border-neutral-800 sm:pl-12 group-hover:border-neutral-700 transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Teaching Assistant</h3>
                <p className="text-sm text-neutral-400 mb-4 sm:mb-6">University of Florida</p>
                <ul className="space-y-3 sm:space-y-4 text-sm text-neutral-300 leading-relaxed">
                  <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-purple-500">
                    Led instructional sessions on Python programming concepts, achieving 95% satisfaction rate
                  </li>
                  <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-purple-500">
                    Facilitated hands-on coding workshops for 30 students with technical support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-24 border-t border-neutral-800">
        <div className="flex items-baseline justify-between mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">Education</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-neutral-800 to-transparent ml-6 sm:ml-12"></div>
        </div>

        <div className="group">
          <div className="flex flex-col sm:flex-row sm:gap-12">
            <div className="sm:w-48 flex-shrink-0 mb-4 sm:mb-0">
              <div className="sm:sticky sm:top-8">
                <p className="text-sm font-bold text-white mb-1">University of Florida</p>
                <p className="text-xs text-neutral-500">Dec 2025</p>
                <div className="mt-2 sm:mt-4 w-12 h-px bg-orange-500"></div>
              </div>
            </div>
            <div className="flex-1 pb-8 sm:border-l border-neutral-800 sm:pl-12 group-hover:border-neutral-700 transition-colors">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Bachelor of Science in Computer Science</h3>
              <p className="text-sm text-neutral-400 mb-6 sm:mb-8">Minor in Economics • Gainesville, FL</p>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2 sm:mb-3">Achievements</p>
                  <p className="text-sm text-neutral-300">2× Hackathon Finalist • E-Club Founding Member • Google Digital Marketing Certification</p>
                </div>
                
                <div>
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2 sm:mb-3">Organizations</p>
                  <p className="text-sm text-neutral-300">Open Source Club • ACM • Entrepreneurship Club</p>
                </div>
                
                <div>
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2 sm:mb-3">Relevant Coursework</p>
                  <p className="text-sm text-neutral-300">Enterprise Software Engineering • Computational Structural Graphics • Algorithm Abstraction • Operating Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-24 border-t border-neutral-800">
        <div className="flex items-baseline justify-between mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">Projects</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-neutral-800 to-transparent ml-6 sm:ml-12"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Project 1 - GamePigeon Solver */}
          <div className="bg-neutral-900 border border-neutral-800 p-6 sm:p-8 hover:border-red-500/50 transition-all group">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-base sm:text-lg font-semibold text-white">GamePigeon Solver</h3>
              <div className="w-2 h-2 rounded-full bg-red-500 group-hover:scale-150 transition-transform flex-shrink-0 mt-1"></div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
              <span className="text-xs px-2 py-1 bg-red-500/10 border border-red-500/20 text-red-400">Python</span>
              <span className="text-xs px-2 py-1 bg-red-500/10 border border-red-500/20 text-red-400">Algorithm</span>
              <span className="text-xs px-2 py-1 bg-red-500/10 border border-red-500/20 text-red-400">Pillow</span>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-sm text-neutral-300 leading-relaxed mb-6">
             <li>Built a GamePigeon solver using the minimax algorithm with alpha beta pruning to compute best possible moves</li>
             <li>Manage game state representation, move generation, and evaluation logic to reduce search complexity and improve decision time</li>
            </ul>
            <div className="flex gap-3">
              <a
                href="https://youtu.be/xYlXpvitHyI"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-medium bg-red-400/10 border border-red-400/30 text-red-400 hover:bg-red-500/20 hover:border-red-500/50 transition-all"
              >
                YouTube ↗
              </a>
              <a
                href="https://github.com/ASLaskin/GamePigeonFillerSolver"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-medium border border-neutral-700 text-neutral-300 hover:border-red-500/50 hover:text-white transition-all"
              >
                GitHub ↗
              </a>

            </div>
          </div>

          {/* Project 2 - ASL Letter Recognition */}
          <div className="bg-neutral-900 border border-neutral-800 p-6 sm:p-8 hover:border-emerald-500/50 transition-all group">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-base sm:text-lg font-semibold text-white">ASL Letter Recognition</h3>
              <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform flex-shrink-0 mt-1"></div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
              <span className="text-xs px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">Next.js</span>
              <span className="text-xs px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">JavaScript</span>
              <span className="text-xs px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">Tailwind</span>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-sm text-neutral-300 leading-relaxed mb-6">
              <li>Real time ASL letter recognition with custom rule based algorithm for hand gesture detection</li>
              <li>Responsive UI deployed on Vercel with seamless cross device experience</li>
            </ul>
            <div className="flex gap-3">
              <a
                href="https://asl-typing.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all"
              >
                Live Demo ↗
              </a>
              <a
                href="https://github.com/ASLaskin/ASLTyping"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-medium border border-neutral-700 text-neutral-300 hover:border-emerald-500/50 hover:text-white transition-all"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Project 3 - Note Nectar */}
          <div className="bg-neutral-900 border border-neutral-800 p-6 sm:p-8 hover:border-purple-500/50 transition-all group relative">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-base sm:text-lg font-semibold text-white">Note Nectar</h3>
              <div className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-150 transition-transform flex-shrink-0 mt-1"></div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
              <span className="text-xs px-2 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400">React</span>
              <span className="text-xs px-2 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400">TypeScript</span>
              <span className="text-xs px-2 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400">MongoDB</span>
              <span className="text-xs px-2 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400">Next.js</span>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-sm text-neutral-300 leading-relaxed mb-6">
              <li>Tired of digging through 54 slide PowerPoints? Note Nectar turns your study materials into clean, structured notes in seconds</li>
              <li>Upload PDF, PPTX, or DOCX files and get instant summaries in a Google Docs style web editor built to save students hours of note taking</li>
            </ul>
            <div className="flex gap-3">
              <a
                href="https://note-nectar.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-medium bg-purple-500/10 border border-purple-500/30 text-purple-400 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all"
              >
                Live Demo ↗
              </a>
              <a
                href="https://github.com/ASLaskin/noteNectar"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-medium border border-neutral-700 text-neutral-300 hover:border-purple-500/50 hover:text-white transition-all"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Project 4 - Derivatives Pricing Library */}
          <div className="bg-neutral-900 border border-neutral-800 p-6 sm:p-8 hover:border-blue-500/50 transition-all group">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-base sm:text-lg font-semibold text-white">Derivatives Pricing Library</h3>
              <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform flex-shrink-0 mt-1"></div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
              <span className="text-xs px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400">Python</span>
              <span className="text-xs px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400">NumPy</span>
              <span className="text-xs px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400">Numba</span>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-sm text-neutral-300 leading-relaxed mb-6">
              <li>Full derivatives library with Black Scholes, lattice models, and Monte Carlo engines optimized with NumPy</li>
              <li>Stochastic volatility models (Heston, SABR) with calibration to market IV surfaces</li>
            </ul>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-24 border-t border-neutral-800">
        <div className="flex items-baseline justify-between mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">Skills</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-neutral-800 to-transparent ml-6 sm:ml-12"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3 sm:mb-4">Languages</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300">Python</span>
              <span className="text-sm px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300">TypeScript</span>
              <span className="text-sm px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300">C++</span>
              <span className="text-sm px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300">SQL</span>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3 sm:mb-4">Frameworks</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300">Next.js</span>
              <span className="text-sm px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300">React</span>
              <span className="text-sm px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300">Flask</span>
              <span className="text-sm px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300">Express</span>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3 sm:mb-4">Tools & Databases</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300">Docker</span>
              <span className="text-sm px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300">MongoDB</span>
              <span className="text-sm px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300">PostgreSQL</span>
              <span className="text-sm px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300">Git</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 mt-12 sm:mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-500">© 2025 Andrew Laskin</p>
            <div className="flex gap-6">
              <a href="https://github.com/ASLaskin" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-500 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/aslaskin/" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-500 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}