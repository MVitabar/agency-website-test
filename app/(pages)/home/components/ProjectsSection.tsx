import Project1 from "@/public/images/project1.svg";
import Project2 from "@/public/images/project2.svg";
import Project3 from "@/public/images/project3.svg";
import Project4 from "@/public/images/project4.svg";
import Project5 from "@/public/images/project5.svg";

const ProjectsList = [
  {
    image: Project1,
    title: "Project 1",
    description: "Description for Project 1",
  },
  {
    image: Project2,
    title: "Project 2",
    description: "Description for Project 2",
  },
  {
    image: Project3,
    title: "Project 3",
    description: "Description for Project 3",
  },
  {
    image: Project4,
    title: "Project 4",
    description: "Description for Project 4",
  },
  {
    image: Project5,
    title: "Project 5",
    description: "Description for Project 5",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col bg-stone-950 p-6 md:p-20">
      <div className="projects-section-card">
        <h2 className="text-4xl md:text-5xl font-medium text-white text-center font-sans">
          Featured Projects
        </h2>

        <div className="flex flex-col gap-4 mt-20">
          {ProjectsList.map((project, index) => (
            <div
              key={index}
              className="relative project-card rounded-2xl overflow-hidden h-80 w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${project.image.src})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-20" />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-white">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
