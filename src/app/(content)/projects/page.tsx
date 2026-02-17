import { Title } from "@/page/projects/widgets";
import { Footer, ProjectCard } from "@/shared/components";

const projectData = {
  title: "Особняк в неоклассике, Рублёвка",
  imageUrl: "/blog.jpg",
  projectId: "project1",
  buttonText: "Смотреть дополнительный кейс",

  characteristics: {
    decorElements: "47 элементов декора (колонны, карнизы, пилястры)",
    facadeArea: "280 м²",
    height: "до 12 метров (3 этажа)",
    installationTime: "12 рабочих дней",
    teamSize: "4 человека + альпинист",
    complexity: "высокая (точная стыковка колонн)",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <main className="container max-w-[1320px] mx-auto px-4">
        <Title />
        <div className="flex flex-col mt-5 gap-3">
          <ProjectCard {...projectData} />
          <ProjectCard {...projectData} />
          <ProjectCard {...projectData} />
          <ProjectCard {...projectData} />
          <ProjectCard {...projectData} />
          <ProjectCard {...projectData} />
          <ProjectCard {...projectData} />
          <ProjectCard {...projectData} />
          <ProjectCard {...projectData} />
        </div>
      </main>
      <Footer />
    </>
  );
}
