import Link from 'next/link';
import {server} from '../../../config';
import Image from 'next/image';
// import Meta from '../../../components/Meta';


const project = ({project}) => {
    // const router = useRouter()
    // const {id} = router.query

    return <>
        {/* <Meta title={article.title} description={article.excerpt}/> */}
        <h3 style={{textAlign:'center'}}>{project.title}</h3>
        <p style={{textAlign:'center'}}>{project.body}</p>
        <Link href='/articles'>Go Back</Link>
        <br />
        <div style={{display:'block', marginLeft:'auto', marginRight:'auto'}}>
            <Image 
                src={`/project${project.id}Before.jpg`}
                alt="Before picture"
                width={500}
                height={500}/>
            <br />
        </div>
        <p style={{textAlign:'center'}}>Before</p>
        <Image 
            src={`/project${project.id}After.jpg`}
            alt="After picture"
            width={500}
            height={500}/>
        <br />
        <p style={{textAlign:'center'}}>After</p>
    </>
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`);
    
    const project = await res.json();

    return {
        props: {
            project
        }
    }
}

export const getStaticPaths = async () => {
const res = await fetch(`${server}/api/articles/`);
    
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