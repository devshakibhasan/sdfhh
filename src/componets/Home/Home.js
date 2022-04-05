import React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);
    const [visible, setVisible] = useState(3);


    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const showMoreitem = ()=>{
        setVisible((preValue) =>preValue+3);
    };



    return (
     
        <div>
              
            <Container className='top-section'>
                <Row>
                    <Col xs={8}>
                        <h1>Welcome to  </h1>
                        <h2> Smart-Watch Kingdom</h2>
                      
                        <p>
                        <h3>The ultimate destination for all smart-watch lovers!</h3>
                            Find all the latest collections with the best prices .
                            You can get all your desired smart-watches with customised colors
                            and with different price ranges.We assure you with our quality ,
                            with fastest delivery time possible.
                        </p>
                        <Button>Live demo</Button>
                    </Col>
                    <Col>
                        <img src="../../images/watch.jpg" alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className='reviews-section review-container'>
                <Row>
                    <Col className='review'>
                        <h1>Customer Reviews</h1>
                        <div className='reviews-card'>

                            {

                                products.slice(0, visible).map(
                                    product => <ReviewCard key={product.id}
                                        product={product}
                                       >
                                    </ReviewCard>)
                            }
                        </div>
                        <Button className='seeAll' 
                        onClick={showMoreitem}>See All Reviews</Button>
                    </Col>

                </Row>
            </Container>

        </div>
    );
};

export default Home;