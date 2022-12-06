import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { getToken } from '../../authentication';

const Row = ({ value, attendance }) => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow hover sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left">{value.id}</TableCell>
        <TableCell>{value.name}</TableCell>
        <TableCell align="left">{value.position}</TableCell>
        <TableCell align="left">{value.branch}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ my: 5 }}
              >
                Attendance History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.keys(attendance).map((item, index) => {
                    const value = attendance[item];
                    const { times } = value;
                    return (
                      <TableRow key={index}>
                        <TableCell style={{ padding: '20px 0px' }}>
                          {item}
                        </TableCell>

                        <TableCell style={{ padding: '20px 0px' }}>
                          {times.map((time, index) => {
                            return <p key={index}>{time}</p>;
                          })}
                        </TableCell>

                        <TableCell style={{ padding: '20px 0px' }}>
                          {value.status}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default function CollapsibleTable() {
  const [tableData, setTabledata] = useState({});
  const [error, setError] = useState('');

  const token = JSON.parse(getToken());

  useEffect(() => {
    axios
      .get('https://test.nexisltd.com/test', {
        headers: { Authorization: `Bearer ${token.access_token}` },
      })
      .then((res) => setTabledata(res.data))
      .then((err) => {
        setError(err);
      });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left">Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="left">Position</TableCell>
            <TableCell align="left">Branch</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(tableData).map((key, index) => {
            const value = tableData[key];
            const { attendance } = value;
            return <Row key={index} value={value} attendance={attendance} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
