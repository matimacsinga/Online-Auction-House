import {React, useState, useEffect, useMemo, createRef, }from "react";
import { Products } from "../utils/Products";
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Button, Image} from "react-bootstrap";
import Product from "../components/Product";
import { withRouter } from "../components/SignupForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import { getProducts } from "./ProductList";

function ProductPage(props) {
    const bidValue = createRef();
    const { user } = props.auth;
    const {id} = useParams()
    const [array, setArray] = useState([])
    let flag = 0
    let product = null
    let arrayId = ''
    useEffect(() => {
        getProducts(setArray)
        
    }, [])
    useMemo(() => {
        arrayId = String(Number(id)-1)
        product = array[arrayId]
    }, [array])
    return (
        <Container style={{width: '50%', height: '50%', paddingTop: '5%', paddingBottom: '20%'}}>
            {product && <Row>
                <Col>
                    <Image src={require(`../images/${product['Image']}`)} style={{width: '100%', height: '100%'}}/>
                </Col>
                <Col>
                    <Container>
                        <Row><span style={{ paddingTop: '5%', fontSize: '25px'}}>{product['Name']}</span></Row>
                        <Row><span style={{ paddingTop: '5%', fontSize: '25px' }}>Buy Now Price: {product['BuyNowPrice']}</span></Row>
                        <Row><span style={{ paddingTop: '5%', fontSize: '25px' }}>Last Bid: {product['LastBid']}</span></Row>
                        <Row><Button onClick={() => buyNow(user,product)} style={{ marginTop: '20%', width: '70%'}}>BUY NOW</Button></Row>
                        <Row><Button onClick={() => placeBid(user, bidValue.current, product)} style={{ marginTop: '5%', width: '70%', marginBottom: '5%'}}>PLACE BID</Button></Row>
                        <Row><input type="number" ref={bidValue}></input></Row>
                    </Container>
                </Col>
            </Row>}
        </Container>
    )
}

export const buyNow = (user,product) => {

    const body = {
        "Name": product['Name'],
        "BoughtPrice": product['BuyNowPrice'],
        "Owner": user.username,
        "Image": product.Image
    }
    axios
    .post("/products/"+user.username, body)
    .then(respone => {
        console.log(respone)
    })
    axios
    .delete("/products/"+product['ProductId'])
    .then(response => {
        console.log(response)
    })
}

export const placeBid = (user,value,product) => {
    const body = {
        'ProductId': product['ProductId'],
        'Name': product['Name'],
        'LastBidder': user.username,
        'LastBid': value.valueAsNumber,
        'BuyNowPrice': product['BuyNowPrice'],
        'Image': product['Image']
    }    
    axios
    .put("/products", body)
    .then(response => {
        console.log(response)
        window.location.reload()
    })
}

export function getProduct(id){
    let filterID = id
    return Products.filter(function(prod){
        return prod.id === filterID
    })
}

ProductPage.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(withRouter(ProductPage));