import React, { useState } from 'react';
import './SignupForm.css';
import img from '../../../images/istockphoto-1321277096-612x612 1.png';
import logo from '../../../images/ultimate hrm logo-05-02 2.png';
import { Link } from 'react-router-dom';
import SignupInfo from './SignupInfo';
import PersonalInfo from './PersonalInfo';
import OtherInfo from './OtherInfo';

const SignupForm = () => {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    password: '',
  });

  const handleSubmit = () => {
    fetch('https://test.nexisltd.com/signup', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setFormData({
      first_name: '',
      last_name: '',
      phone_number: '',
      email: '',
      password: '',
    });
  };

  const componentDisplay = () => {
    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <SignupInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="m-5 py-5">
      <div className="row">
        <div className="col-sm-12 col-md-7">
          <div className="align-baseline">
            <img src={logo} alt="" />
          </div>
          <div className="d-flex justify-content-center">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="col-sm-12 col-md-5">
          <div className="form-container d-flex justify-content-center align-items-center">
            <div className="text-center form-content">
              <h4 style={{ marginBottom: '100px' }}>SignUp Form</h4>
              {componentDisplay()}
              <div>
                {/* Back button */}
                {page > 0 ? (
                  <button
                    className="back-btn me-5"
                    onClick={() => setPage(page - 1)}
                  >
                    Back
                  </button>
                ) : (
                  ''
                )}
                {/* Next or submit button */}
                <button
                  onClick={() => {
                    if (page === 2) {
                      handleSubmit();
                    } else {
                      setPage(page + 1);
                    }
                  }}
                  className="simple-btn"
                >
                  {page === 0 || page === 1 ? (
                    <>
                      Next Step{' '}
                      <i class="fa-solid fa-arrow-right-long ms-2"></i>
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
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
                  Already have an account?
                </span>
                <Link to="/login" className="signup-link ms-2">
                  LOGIN HERE!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
