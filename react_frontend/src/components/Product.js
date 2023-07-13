import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product({product}) {
    
    return(
            <Card>
                <Card.Body>
                    <Card.Img src={require(`../images/${product['Image']}`)} />
                    <Link to={`/product/${product['ProductId']}`}><Card.Title>{product['Name']}</Card.Title></Link>
                    <Card.Text>Buy Now: {product['BuyNowPrice']}</Card.Text>
                    <Card.Text>Last Bid: {product['LastBid']}</Card.Text>
                    <h2>{product.price}</h2>
                </Card.Body>
            </Card>
    )  
      
}

export default Product