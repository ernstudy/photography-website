import About from "@/components/About/About";
import ContactMe from "@/components/ContactMe/ContactMe";
import Cover from "@/components/Cover/Cover";
import ProjectCard from "@/components/ProjectCard/ProyectCard";
import styles from "./MainPage.module.css"; // Import the CSS module for styling
import projectList from "@/lib/projecrts";
export default function page() {
  // Get the last 5 projects from the project list
  const recentProjects = projectList.slice(-5);

  return (
    <>
      <Cover />

      <About />

      {/* Last project section  */}
      <section className={styles.lastProjects}>
        <h2 className={styles.lastProjectsTitle}>
          <span className={styles.decorate}>Last</span> Projects
        </h2>

        <div className={styles.ProjectCardList}>
          {recentProjects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </section>

      <ContactMe />
    </>
  );
}
