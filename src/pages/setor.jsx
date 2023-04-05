import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
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
import { neutral } from 'src/theme/colors';

export default function Page() {
  const [apiDados, setApiDados] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  // const [rows, setRows] = useState([]);
  const [novoItem, setNovoItem] = useState({});
  const [nomeNovoItem, setNomeNovoItem] = useState('');
  const [novoDescricao, setNovoDescricao] = useState('');



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
        setFilteredData(filteredData);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchValue(searchTerm);
    const filteredData = apiDados.filter(item =>
      item.nomeSetor.toLowerCase().includes(searchTerm) ||
      item.descricao.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filteredData);
    setPage(0);
  };

  const handleAdd = () => {

    const newFilteredData = [...filteredData, { nomeSetor: nomeNovoItem, descricao: novoDescricao }];
    setFilteredData(newFilteredData);
    setNovoItem({ nomeSetor: nomeNovoItem, descricao: novoDescricao });

    const authorizationBearer = window.sessionStorage.getItem('Authorization');
    api.post('/setor/criar', { nomeSetor: nomeNovoItem, descricao: novoDescricao }, {
      headers: {
        Authorization: authorizationBearer,
      },
    })
      .then(() => {
        console.log('Item adicionado com sucesso!');
        const newApiDados = [...apiDados, { nomeSetor: nomeNovoItem, descricao: novoDescricao }];
        setApiDados(newApiDados);
        setFilteredData(newApiDados);
      })
      .catch((error) => console.error(error));
    setNovoDescricao('');
    setNomeNovoItem('');
  };



  const handleFilteredData = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredData = apiDados.filter(item =>
      item.nomeSetor.toLowerCase().includes(searchTerm) ||
      item.descricao.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filteredData);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
              <Box sx={{ position: 'relative', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: 1.5, p: 2 }}>
                <Typography variant="h6" sx={{ position: 'absolute', top: '-15px', left: '15px', bgcolor: 'none', px: 1 }}>
                  Adicionar Setor
                </Typography>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Nome do Setor"
                      value={nomeNovoItem}
                      onChange={(event) => setNomeNovoItem(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Descrição do Setor"
                      value={novoDescricao}
                      onChange={(event) => setNovoDescricao(event.target.value)}
                    />
                  </Grid>
                </Grid>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    variant="contained"
                    onClick={handleAdd}
                  >
                    Adicionar
                  </Button>
                </Box>
              </Box>

              <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer style={{ borderRadius: 5 }}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead >
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align="left"
                            style={{ minWidth: column.minWidth, backgroundColor: neutral[800], color: neutral[200] }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                        // const isEditing = editingRow === row.id;

                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.id}
                          // onClick={() => handleRowClick(row.id)}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];

                              return (
                                <TableCell key={column.id} >
                                  {value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                    </TableBody>

                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={(filteredData.length > 0 ? filteredData : (apiDados || [])).length}
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
