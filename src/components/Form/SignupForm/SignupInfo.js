import React from 'react';

const SignupInfo = ({ formData, setFormData }) => {
  return (
    <div>
      <div>
        <input
          type="number"
          name="phone_number"
          id="phone_number"
          placeholder=""
          className="input-field"
          value={formData.phone_number}
          onChange={(e) =>
            setFormData({ ...formData, phone_number: e.target.value })
          }
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Write Email Address"
          className="input-field"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
    </div>
  );
};

export default SignupInfo;
