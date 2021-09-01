import Layout from '../../components/Layout';
import Card from 'react-bootstrap/Card';
import { getPosts } from '../../lib/Post';

const Posts = ({ posts }) => {
    return (
        <Layout>
            {posts.map((post) => (
                <Card key={post.id}>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.body}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </Layout>
    );
};

// Get static data from backend
export const getStaticProps = async () => {
    const posts = await getPosts();
    return {
        props: {
            posts,
        },
    };
};

export default Posts;
