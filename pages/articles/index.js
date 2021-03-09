import ProjectList from '../../components/ProjectList';
import {server} from '../../config';
import Head from 'next/head'


export default function Project ({projects}) {
    return(
        <div>
            <Head>
                <title>Projects</title>
                <link rel="icon" href="/testlogo4.png" />
            </Head>
            <h3>Projects page</h3>
            <ProjectList projects={projects} />
        </div>
    );
}


export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/articles`)
    const projects = await res.json()
  
    return {
      props: {
        projects
      }
    }
  }