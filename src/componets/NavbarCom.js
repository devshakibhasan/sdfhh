import React from 'react';
import './NavbarCom.css';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Routes,
    Link,
    Route
} from "react-router-dom";
import Blogs from './Blogs/Blogs';
import Dashboard from './Dashboard/Dashboard';
import Home from './Home/Home';
import Review from './Reviews/Review';
import PageNotefound from './PageNotefound/PageNotefound';

const NavbarCom = () => {
    return (

        <Router>
            <div>

                <Navbar bg="dark" variant='dark' expand="lg" >

                    <Container>
                        <Navbar.Brand as={Link} to={'/'}>WeWatch</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
         
                          

                            <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll activeKey="/home"   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                                <Nav.Link as={Link} to={'/home'} className='nav'>Home</Nav.Link>
                                <Nav.Link as={Link} to={'/reviews'} className='nav'>Reviews</Nav.Link>
                                <Nav.Link as={Link} to={'/dashboard'} className='nav'>Dashboard</Nav.Link>
                                <Nav.Link as={Link} to={'/blogs'} className='nav'>Blogs</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <div>
                <Routes>
                    <Route path="/home" caseSensitive={false} element={<Home />} />
                    <Route path="/reviews" caseSensitive={false} element={<Review />} />
                    <Route path="/dashboard" caseSensitive={false} element={<Dashboard />} />
                    <Route path="/blogs" caseSensitive={false} element={<Blogs />} />

                    <Route path="/" caseSensitive={false} element={<Home />} />

                    <Route path="*" element={<PageNotefound></PageNotefound>} />
                </Routes>
            </div>

        </Router>
    );
};

export default NavbarCom;