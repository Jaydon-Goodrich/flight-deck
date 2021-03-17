import projectStyles from '../styles/Project.module.css';
import Link from 'next/link';
import Image from 'next/image';


const ProjectItem = ({project}) => {
    return (
        <Link href="/articles/[id]" as={`/articles/${project.id}`} >
            <a className={projectStyles.card}>
                <Image 
                src={`/project${project.id}After.jpg`}
                alt="After picture"
                width={1000}
                height={500}/>
                <h3>{project.title} &rarr;</h3>
                <p>{project.excerpt}</p>
            </a>
        </Link>
    )
}

export default ProjectItem;