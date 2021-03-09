import ProjectList from '../../components/ProjectList';
import {server} from '../../config/';

export default function Project ({projects}) {
    return(
        <div>
            <h3>Projects page</h3>
            <ProjectList projects={projects} />
        </div>
    );
}


export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/projects`)
    const projects = await res.json()
  
    return {
      props: {
        projects
      }
    }
  }