import Head from 'next/head';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Layout = ({ children }) => (
    <>
        <Head>
            <div>
                <meta charSet='UTF-8' />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <title>My Next App</title>
            </div>
        </Head>
        <header>
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand>NextJS</Navbar.Brand>
                <Nav>
                    <Nav.Link>Posts</Nav.Link>
                    <Nav.Link>About</Nav.Link>
                </Nav>
            </Navbar>
        </header>

        <main>{children}</main>
    </>
);

export default Layout;
