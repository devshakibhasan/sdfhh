import React from 'react';
import { Card, Col, Container, Button, Img, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
const Review = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);



    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const handleRemoveToCart = (product) => {
        const newCart = [...cart, product];

        // setCart(newCart);
        // const newCart = [...cart, product];
        // setCart(newCart);

    }







    return (
        <div>
             <Container className='reviews-section review-container'>
                <Row>
                    <Col className='review'>
                        <h1>Customer Reviews</h1>
                        <div className='reviews-card'>
                            {
                                products.map(
                                    product =>  <ReviewCard key={product.id}
                                    product={product}
                                    handleAddToCart={handleAddToCart}>
                                </ReviewCard>)
                            }
                        </div>
                       
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Review;