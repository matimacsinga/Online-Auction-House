import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux"; 
import PropTypes from "prop-types"; 
import { signupNewUser } from '../utils/SignupActions';
import {Container, Button, Row, Col, Form, FormControl} from 'react-bootstrap';
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
} 

class SignupForm extends Component{
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
    
      onSignupClick = () => {
        const userData = {
          username: this.state.username,
          password: this.state.password
        };
        this.props.signupNewUser(userData);
      };
    
      render() {
        return (
          <Container>
            <Row>
              <Col md="4">
                <h1 style={{paddingTop: 100}}>Sign up</h1>
                <Form style={{paddingTop: 30, paddingBottom: 30}}>
                  <Form.Group controlId="usernameId">
                    <Form.Label>User name</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="Enter username"
                      value={this.state.username}
                      onChange={this.onChange}
                    />
                    <FormControl.Feedback type="invalid"></FormControl.Feedback>
                  </Form.Group>
    
                  <Form.Group controlId="passwordId" style={{paddingTop: 30}}>
                    <Form.Label>Your password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      value={this.password}
                      onChange={this.onChange}
                    />
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                  </Form.Group>
                </Form>
                <Button
                  color="primary"
                  onClick={this.onSignupClick}  
                >Sign up</Button>
                <p className="mt-2" style={{paddingTop: 20}}>
                  Already have account? <Link to="/login">Login</Link>
                </p>
              </Col>
            </Row>
          </Container>
        );
      }
    }

SignupForm.propTypes = {
  signupNewUser: PropTypes.func.isRequired,
  createUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  createUser: state.createUser
})

export default connect(mapStateToProps, {
  signupNewUser
})(withRouter(SignupForm));