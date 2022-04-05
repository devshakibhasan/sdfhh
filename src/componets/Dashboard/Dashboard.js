
import React from 'react';
import { PureComponent, Component } from 'react';
import { useEffect, useState } from 'react'; 
import './Dashboard.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [visible, setVisible] = useState(3);


    useEffect(() => {
        fetch('chart.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])



    return (
        <div className='chart'>
        <Container>
            <br />
            <h1>Sale Analysis</h1>
            <Row>
                <Col>
                    <ResponsiveContainer width="100%" height="100%" aspect={2} className='first'>
                        <BarChart
                            width={500}
                            height={300}
                            data={products}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="sell" fill="#8884d8" />
                            <Bar dataKey="revenue" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </Col>
                <Col>

                    <ResponsiveContainer width="100%" height="100%" aspect={2} className='second'>
                        <AreaChart
                            width={500}
                            height={400}
                            data={products}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="sell" stackId="1" stroke="#8884d8" fill="#8884d8" />
                            <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                            <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                        </AreaChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default Dashboard;