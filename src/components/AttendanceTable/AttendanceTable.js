import React, { useEffect, useState } from 'react';
import './AttendanceTable.css';
import { Container } from 'react-bootstrap';
import logo from '../../images/ultimate hrm logo-05-02 2.png';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const AttendanceTable = () => {
  const [tableData, setTabledata] = useState({});

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InRlc3QxMEBnbWFpbC5jb20iLCJGaXJzdF9uYW1lIjoidGVzdCIsIkxhc3RfbmFtZSI6InRlc3QiLCJVaWQiOiI2MzhiNmJmMWFiODBiY2I0MTU3NTFmMDYiLCJleHAiOjE2NzAyNjI3MzR9.A43b0Tr-oUnIHhUvanLzVPYiAOr80mA4Z4dlMAwdbeg';
  useEffect(() => {
    axios
      .get('/https://test.nexisltd.com/test', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setTabledata(res.data))
      .then((err) => console.log(err));
  }, []);

  return (
    <Container className="my-5">
      <div className="row ">
        <div className="col-12">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <div className="d-flex justify-content-center my-5">
              <p className="title">Attendance information</p>
            </div>

            <div>
              <Table striped>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Employee Name</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AttendanceTable;
