import Link from 'next/link';
import {server} from '../../../config';
import Image from 'next/image';
import {Container, Row, Col}from 'react-bootstrap';   
// import Meta from '../../../components/Meta';


const project = ({project}) => {
    // const router = useRouter()
    // const {id} = router.query

    return <>
        {/* <Meta title={article.title} description={article.excerpt}/> */}
        <h3 style={{textAlign:'center'}}>{project.title}</h3>
        <p style={{textAlign:'center'}}>{project.body}</p>
        <p style={{textAlign:'center'}}><Link href='/articles'>Go Back</Link></p>
        <br />
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} sm={6} md={6}>
                    <Image 
                        src={`/project${project.id}Before.jpg`}
                        alt="Before picture"
                        width={1000}
                        height={500}
                         />
                </Col>
            </Row>
        
        
        <h4 style={{textAlign:'center'}}>Before</h4>
        <Row className="justify-content-md-center">
                <Col xs={12} sm={6} md={6}>
        <Image 
            src={`/project${project.id}After.jpg`}
            alt="After picture"
            width={1000}
            height={500}/>
            </Col>
        </Row>
        </Container>
        <h4 style={{textAlign:'center'}}>After</h4>
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