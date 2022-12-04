import React, { useState } from 'react';
import './LoginForm.css';
import img from '../../../images/istockphoto-1321277096-612x612 1.png';
import logo from '../../../images/ultimate hrm logo-05-02 2.png';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://test.nexisltd.com/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.access_token));
    setFormData({ email: '', password: '' });
  };
  return (
    <div className="m-5 py-5">
      <div className="row">
        <div className="col-sm-12 col-md-7">
          <div className="align-baseline">
            <img src={logo} className="img-fluid" alt="" />
          </div>
          <div className="d-flex justify-content-center">
            <img src={img} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="col-sm-12 col-md-5">
          <div className="form-container d-flex justify-content-center align-items-center">
            <div className="text-center form-content">
              <h4 style={{ marginBottom: '100px' }}>Log in Form</h4>
              <div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Write Email Address"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                      }}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      placeholder="Write Password"
                      value={formData.password}
                      onChange={(e) => {
                        setFormData({ ...formData, password: e.target.value });
                      }}
                      className="input-field"
                    />
                  </div>

                  <button className="simple-btn" type="submit">
                    Log In
                  </button>
                </form>
              </div>
              <div style={{ marginTop: '100px' }}>
                <span
                  style={{
                    color: '#7E7E7E',
                    fontSize: '12px',
                    fontWeight: '400',
                    lineHeight: '15px',
                  }}
                >
                  Don’t have an account?
                </span>
                <Link
                  to="/signup"
                  className="signup-link ms-2"
                  style={{ display: 'inline-block' }}
                >
                  SIGNUP HERE!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
