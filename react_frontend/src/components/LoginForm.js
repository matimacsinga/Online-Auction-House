import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {Container, Button, Row, Col, Form, FormControl} from 'react-bootstrap';   
import { connect } from "react-redux";          
import PropTypes from "prop-types"; 
import { login } from '../utils/LoginActions';
import { withRouter } from './SignupForm';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoginClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.login(userData, "/info");
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md="4">
            <h1 style={{paddingTop: 100}}>Login</h1>
            <Form style={{paddingTop: 30, paddingBottom: 30}}>
              <Form.Group controlId="usernameId">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter user name"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <FormControl.Feedback type="invalid"></FormControl.Feedback>
              </Form.Group >

              <Form.Group controlId="passwordId" style={{paddingTop: 30}}>
                <Form.Label>Your password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Button color="primary" onClick={this.onLoginClick}>Login</Button>
            <p className="mt-2" style={{paddingTop: 20}}>
              Don't have account? <Link to="/signup">Signup</Link>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  login
})(withRouter(LoginForm));
