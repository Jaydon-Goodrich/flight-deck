import projectStyles from '../styles/Project.module.css';
import ProjectItem from './ProjectItem';

const ProjectList = ({projects}) => {
    return (
        <div className={projectStyles.grid}>
            {projects.map(project => (
                <ProjectItem project={project} />
            ))}
        </div>
    )
}

export default ProjectList;