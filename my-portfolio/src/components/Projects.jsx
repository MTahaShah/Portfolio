export default function Projects() {
    return (
      <section id="projects" className="py-20 px-6 bg-[#1a1a1a] text-center">
        <h2 className="text-3xl font-semibold mb-8 text-[#5e3af4]">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-[#222] rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">FrameByFeel</h3>
            <p className="text-gray-400">A community-driven movie review platform connecting users through emotion-based film discussions.</p>
          </div>
          <div className="p-6 bg-[#222] rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Attendance Management System</h3>
            <p className="text-gray-400">An automated attendance system with role-based permissions and leave management.</p>
          </div>
        </div>
      </section>
    );
  }
  