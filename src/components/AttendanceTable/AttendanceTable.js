import React from 'react';
import './AttendanceTable.css';
import { Container } from 'react-bootstrap';
import logo from '../../images/ultimate hrm logo-05-02 2.png';
import Table from './Table';

const AttendanceTable = () => {
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

            {/* table */}
            <div>
              <Table />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AttendanceTable;
