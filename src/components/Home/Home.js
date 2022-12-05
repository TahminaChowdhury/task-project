import React from 'react';
import './Home.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../images/istockphoto-1321277096-612x612 1.png';
import logo from '../../images/ultimate hrm logo-05-02 2.png';

const Home = () => {
  return (
    <Container className="my-5">
      <div className="row ">
        <div className="col-12">
          <div className="d-flex justify-content-between">
            <img src={logo} className="img-fluid" alt="" />
            <div className="auth-div d-flex justify-content-between align-items-center">
              <Link to="/login" className="me-2">
                Login
              </Link>
              <Link to="/signup">Signup</Link>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <img src={img} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
