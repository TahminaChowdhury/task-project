import React from 'react';

const OtherInfo = ({ formData, setFormData }) => {
  return (
    <div>
      <div>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Write Password"
          className="input-field"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default OtherInfo;
