import Head from 'next/head';
import { Box, Container, Stack, Typography } from '@mui/material';
import { SettingsNotifications } from 'src/sections/settings/settings-notifications';
import { SettingsPassword } from 'src/sections/settings/settings-password';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CustomersSearch } from 'src/sections/customer/customers-search';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import { styled } from '@mui/material/styles';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(codigo, numero, modeloEquipamento, tipoMaterial, quantidade, solicitante, dataPedido, dataExecucao, piNeb, nomenclatura, numeroOS, obrigacao) {
  return { codigo, numero, modeloEquipamento, tipoMaterial, quantidade, solicitante, dataPedido, dataExecucao, piNeb, nomenclatura, numeroOS, obrigacao };
}

const rows = [
  createData('44068', 5991, '206-031-597-003', 'Sobressalente', 1, 'cb geraldo', '01/02/2016', undefined, '013287110', 'STRIKER', 530013, 'N'),
  createData('44068', 5991, '206-031-597-003', 'Sobressalente', 1, 'cb geraldo', '01/02/2016', undefined, '013287110', 'STRIKER', 530013, 'N'),
  createData('44068', 5991, '206-031-597-003', 'Sobressalente', 1, 'cb geraldo', '01/02/2016', undefined, '013287110', 'STRIKER', 530013, 'N'),
  createData('44068', 5991, '206-031-597-003', 'Sobressalente', 1, 'cb geraldo', '01/02/2016', undefined, '013287110', 'STRIKER', 530013, 'N'),
  createData('44068', 5991, '206-031-597-003', 'Sobressalente', 1, 'cb geraldo', '01/02/2016', undefined, '013287110', 'STRIKER', 530013, 'N'),
  createData('44068', 5991, '206-031-597-003', 'Sobressalente', 1, 'cb geraldo', '01/02/2016', undefined, '013287110', 'STRIKER', 530013, 'N'),
  createData('44068', 5991, '206-031-597-003', 'Sobressalente', 1, 'cb geraldo', '01/02/2016', undefined, '013287110', 'STRIKER', 530013, 'N'),
];

const Page = () => (
  <>
    <Head>
      <title>
        PIM Executados | PPU CONSULTAS
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography variant="h4">
            PIM Executados
            <CustomersSearch />

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Código</StyledTableCell>
                    <StyledTableCell align="center">Número</StyledTableCell>
                    <StyledTableCell align="center">Modelo Equipamento&nbsp;(pn)</StyledTableCell>
                    <StyledTableCell align="center">Tipo do Material</StyledTableCell>
                    <StyledTableCell align="center">Quantidade</StyledTableCell>
                    <StyledTableCell align="center">Solicitante</StyledTableCell>
                    <StyledTableCell align="center">Data do Pedido</StyledTableCell>
                    <StyledTableCell align="center">Data Execução</StyledTableCell>
                    <StyledTableCell align="center">PI/NEB</StyledTableCell>
                    <StyledTableCell align="center">Nomenclatura</StyledTableCell>
                    <StyledTableCell align="center">Numero Os</StyledTableCell>
                    <StyledTableCell align="center">Obrigação</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.codigo}>
                      <StyledTableCell component="th" scope="row">
                        {row.codigo}
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.numero}</StyledTableCell>
                      <StyledTableCell align="center">{row.modeloEquipamento}</StyledTableCell>
                      <StyledTableCell align="center">{row.tipoMaterial}</StyledTableCell>
                      <StyledTableCell align="center">{row.quantidade}</StyledTableCell>
                      <StyledTableCell align="center">{row.solicitante}</StyledTableCell>
                      <StyledTableCell align="center">{row.dataPedido}</StyledTableCell>
                      <StyledTableCell align="center">{row.dataExecucao || 'null'}</StyledTableCell>
                      <StyledTableCell align="center">{row.piNeb}</StyledTableCell>
                      <StyledTableCell align="center">{row.nomenclatura}</StyledTableCell>
                      <StyledTableCell align="center">{row.numeroOS}</StyledTableCell>
                      <StyledTableCell align="center">{row.obrigacao}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Typography>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
