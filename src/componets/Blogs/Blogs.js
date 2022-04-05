import React from 'react';
import { Row, Col, Container, Button, Card } from 'react-bootstrap';

import './Blogs.css';
const Blogs = () => {
    return (
        <div>
            <h1>React Question</h1>
            <Container className='top-section'>

                <Row>
                    <Col>
                        <Card style={{ width: '35rem' , height: '22rem' }}>
                            <Card.Body>
                                <Card.Text className='title'>1. What is context api?</Card.Text>
                                <Card.Text className='answer'>
                                    Context api is a new feature of react added in version 16.3. It allows to share
                                    states , exchange unique details and assists to solve prop drilling easily all
                                    over any application . It is also known as an easier and lighter way for state
                                    management using Redux.We only need React.createContex() to use it .By using context
                                    API we are able to define unrelated contexts and later on use them in there proper
                                    place in our application.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '35rem' , height: '22rem'}}>
                            <Card.Body>
                                <Card.Text className='title'>2. What is the difference between inline and inline block elemenets?</Card.Text>
                                <Card.Text className='answer'>
                                    In inline-block elements we can set width and height. But if we try to set
                                    width and height in inline elements, it will have no effects .In inline
                                    elements top ,bottom ,margin and paddings are not respected. There is a
                                    similarity between inline and inline-block elements ,they do not start
                                    on a new line.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default Blogs;