import React, { useState, useEffect} from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Products } from '../utils/Products';
import Product from '../components/Product';
import axios from 'axios';

function ProductList() {
  let mapping = []
  const [array, setArray] = useState([])
  useEffect(() => {
    getProducts(setArray)
  }, []);
  mapping = array.map(displayProduct)
  console.log(array)
  return (
      <Container style={{width: '80%', height: '95%'}}>
        <Row>{mapping.slice(0,3)}</Row>
        <Row>{mapping.slice(3,6)}</Row>
        <Row>{mapping.slice(6,9)}</Row>
        <Row>{mapping.slice(9,mapping.length+1)}</Row>
      </Container>
      
    )
}

function displayProduct(product){

  return(
    <Col>
      <Product product={product}/>
    </Col>
  )
}

export const getProducts = (setArray) => {
  axios
  .get("/products")
  .then(response => {
    setArray(response['data'])
  })
}

export default ProductList