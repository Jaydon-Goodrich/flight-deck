import projectStyles from '../styles/Project.module.css';
import ProjectItem from './ProjectItem';

const ProjectList = ({projects}) => {
    return (
        <div className={projectStyles.grid}>
            {projects.map(project => (
                <ProjectItem project={project} key={project.id} />
            ))}
        </div>
    )
}

export default ProjectList;