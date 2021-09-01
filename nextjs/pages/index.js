import Layout from '../components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

export default function Home() {
    return (
        <Layout>
            <Jumbotron>
                <h1 className='display-3'>NextJS App</h1>
                <p>This is my NextJS App</p>
                <hr className='my-2' />
                <p>
                    <Link href='/posts' passHref>
                        <Button color='primary'>Posts</Button>
                    </Link>
                </p>
            </Jumbotron>
        </Layout>
    );
}
