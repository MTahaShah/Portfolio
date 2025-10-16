export default function Navbar() {
    return (
      <nav className="flex justify-between items-center p-6 bg-black sticky top-0">
        <h1 className="text-2xl font-bold text-[#5e3af4]">Taha Shah</h1>
        <ul className="flex gap-6">
          <li><a href="#about" className="hover:text-[#cc91f9]">About</a></li>
          <li><a href="#projects" className="hover:text-[#cc91f9]">Projects</a></li>
          <li><a href="#contact" className="hover:text-[#cc91f9]">Contact</a></li>
        </ul>
      </nav>
    );
  }
  