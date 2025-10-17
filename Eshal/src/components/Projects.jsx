import { useState } from "react";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const projects = ["Project One", "Project Two", "Project Three"];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div style={{ marginTop: "30px" }}>
        <h3>{projects[index]}</h3>
        <button onClick={() => setIndex((index + 1) % projects.length)}>
          Next →
        </button>
      </div>
    </section>
  );
}
