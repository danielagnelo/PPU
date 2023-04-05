import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Box, Container, Stack, Typography } from '@mui/material';
import { SettingsNotifications } from 'src/sections/settings/settings-notifications';
import { SettingsPassword } from 'src/sections/settings/settings-password';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CustomersSearch } from 'src/sections/customer/customers-search';
import TextField from '@mui/material/TextField';

import api from 'src/api/api';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';



export default function Page() {
  const [apiDados, setApiDados] = useState(null);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
    const authorizationBearer = window.sessionStorage.getItem('Authorization');
    api.get('/setor', {
      headers: {
        Authorization: authorizationBearer,
      },
    })
      .then((response) => {
        const filteredData = response.data.filter(item => item.nomeSetor && item.descricao);
        setApiDados(filteredData);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
    const filteredData = apiDados.filter(item =>
      item.nomeSetor.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.descricao.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredData);
    setPage(0);
  };

  const handleFilteredData = (event) => {
    setSearchValue(event.target.value);
    const filteredData = apiDados.filter(item =>
      item.nomeSetor.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.descricao.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredData);
    setPage(0);
  };
  const createData = (name, code, population, size) => {
    const density = population / size;
    return { name, code, population, size, density };
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  /* const handleSearch = (event) => {
    setSearchValue(event.target.value);
  } */

  const columns = [
    { id: 'nomeSetor', label: 'Nome', minWidth: 170 },
    { id: 'descricao', label: 'Descrição', minWidth: 100 },
    { id: 'om', label: 'OM', minWidth: 100 }
  ];

  return (
    <>
      <Head>
        <title>SETOR | PPU MATERIAL</title>
      </Head>
      <DashboardLayout>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth="lg">
            <Stack spacing={3}>
              <Typography variant="h4">
                Setor
              </Typography>
              <TextField
                label="Pesquisar"
                variant="outlined"
                size="small"
                value={searchValue}
                onChange={handleSearch}
              />
              <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {!searchValue && apiDados && apiDados
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                          return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                              <TableCell>{row.nomeSetor}</TableCell>
                              <TableCell>{row.descricao}</TableCell>
                              <TableCell>{row.om}</TableCell>
                            </TableRow>
                          );
                        })}
                      {searchValue && filteredData && filteredData
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                          return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                              <TableCell>{row.nomeSetor}</TableCell>
                              <TableCell>{row.descricao}</TableCell>
                              <TableCell>{row.om}</TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={apiDados ? apiDados.length : 0}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </Stack>
          </Container>
        </Box>
      </DashboardLayout>
    </>
  );
}
