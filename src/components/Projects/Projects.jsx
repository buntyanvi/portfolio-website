
import React from 'react';
import styles from './Projects.module.css';
import projects from '../../Data/projects.json';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className={styles.container} id='project'>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
