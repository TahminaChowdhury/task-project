import React, { useEffect, useState } from 'react';
import './AttendanceTable.css';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import logo from '../../images/ultimate hrm logo-05-02 2.png';

const AttendanceTable = () => {
  const [tableData, setTabledata] = useState({});
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InRlc3QxMEBnbWFpbC5jb20iLCJGaXJzdF9uYW1lIjoidGVzdCIsIkxhc3RfbmFtZSI6InRlc3QiLCJVaWQiOiI2MzhiNmJmMWFiODBiY2I0MTU3NTFmMDYiLCJleHAiOjE2NzAxNjgzODl9.soZAxdeb8tT88ePQ7KwcIMFt9K6JD-IurO-FDYXDcCY';
  useEffect(() => {
    fetch('https://test.nexisltd.com/test', {
      method: 'GET',
      headers: {
      
        Authentication: `Bearer ${token} `,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <Container className="my-5">
      <div className="row ">
        <div className="col-12">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="d-flex justify-content-center">
            <div className="title d-flex justify-content-center align-items-center">
              <p>Attendance information</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AttendanceTable;
