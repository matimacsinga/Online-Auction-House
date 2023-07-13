import {React, useState, useEffect} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from '../components/SignupForm'
import { Container, Row, Col } from "react-bootstrap";
import { logout } from "../utils/LoginActions";
import { Link } from "react-router-dom";
import axios from "axios";
import Bought from "../components/Bought";

function AccountInfo(props){
    const { user } = props.auth;
      let mapping = []
      const [array, setArray] = useState([])
      useEffect(() => {
        getBought(setArray, user)
      }, []);
      mapping = array.map(displayBought)
      console.log(array)
      if(user.username !== undefined){
      return (
        <div>
          <Container style={{ marginLeft: '80%'}}>
            <p>User: {user.username} <span style={{ marginLeft: '1%' }}><Link onClick={() => onLogout(props)}>Logout</Link></span></p>
          </Container>
          <Container style={{ marginTop:'3%' }}>
            <h1>Bought Products</h1>
          </Container>
          <Container>
            <Row>{mapping}</Row>
          </Container>
        </div>
      );
    }
    else{
      return (
        <Container>
          <h1>You need to login first</h1>
        </Container>
      )
    }
  }

export const onLogout = (props) => {
  props.logout();
};

function displayBought(bought){

  return(
    <Col>
      <Bought bought={bought}/>
    </Col>
  )
}

export const getBought = (setArray, user) => {
  axios
  .get("/products/"+user.username)
  .then(response => {
    setArray(response['data'])
  })
}

AccountInfo.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  logout
})(withRouter(AccountInfo));