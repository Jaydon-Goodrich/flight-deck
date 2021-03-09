import Link from 'next/link';
import {server} from '../../../config';
// import Meta from '../../../components/Meta';


const project = ({project}) => {
    // const router = useRouter()
    // const {id} = router.query

    return <>
        {/* <Meta title={article.title} description={article.excerpt}/> */}
        <h1>{project.title}</h1>
        <p>{project.body}</p>
        <br />
        <Link href='/'>Go Back</Link>
    </>
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/projects/${context.params.id}`);
    
    const project = await res.json();

    return {
        props: {
            project
        }
    }
}

export const getStaticPaths = async () => {
const res = await fetch(`${server}/api/projects/`);
    
const projects = await res.json();

const ids = projects.map(project => project.id)
const paths = ids.map(id => ({params: {id: id.toString()}}))

return {
    paths,
    fallback: false
}
}

// export const getStaticProps = async (context) => {
//         const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
        
//         const article = await res.json();

//         return {
//             props: {
//                 article
//             }
//         }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        
//     const articles = await res.json();

//     const ids = articles.map(article => article.id)
//     const paths = ids.map(id => ({params: {id: id.toString()}}))

//     return {
//         paths,
//         fallback: false
//     }
// }

export default project;