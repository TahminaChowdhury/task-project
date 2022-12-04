import React from 'react';

const PersonalInfo = ({ formData, setFormData }) => {
  return (
    <div>
      <div>
        <input
          type="text"
          name="first_name"
          id="first_name"
          placeholder="Write First Name"
          className="input-field"
          value={formData.first_name}
          onChange={(e) =>
            setFormData({ ...formData, first_name: e.target.value })
          }
        />
      </div>
      <div>
        <input
          type="text"
          name="last_name"
          id="last_name"
          placeholder="Write Last Name"
          className="input-field"
          value={formData.last_name}
          onChange={(e) =>
            setFormData({ ...formData, last_name: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
