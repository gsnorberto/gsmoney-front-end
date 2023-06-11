import HeaderMenu from "../../components/HeaderMenu";
import { HomeArea, HomeContent, MainTable, TableBody, TableContainer, TableData, TableHead, TableHeader, HeaderTableRow, DataTableRow, Title, TableTitle, TableTitle2, TableCalendar, Month, OtherTables, SummaryTable, WalletTable } from "./styles";

import AddBoxIcon from '@mui/icons-material/AddBox';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';


export default () => {
  return (
    <>
      <HeaderMenu />
      <HomeArea>
        <HomeContent>
          <Title>CONTROLE FINANCEIRO</Title>
          <TableCalendar>
            <AddBoxIcon className="icon plus-icon" />
            <ArrowBackIcon className="icon" />
            <Month>JUNHO 2O23</Month>
            <ArrowForwardIcon className="icon" />
          </TableCalendar>
          <MainTable>
            <TableTitle>2023</TableTitle>
            <TableContainer>
              <TableHead>
                <HeaderTableRow>
                  <TableHeader>DESCRIÇÃO</TableHeader>
                  <TableHeader>DATA</TableHeader>
                  <TableHeader>VALOR</TableHeader>
                  <TableHeader>TIPO</TableHeader>
                  <TableHeader>STATUS</TableHeader>
                  <TableHeader>AÇÕES</TableHeader>
                </HeaderTableRow>
              </TableHead>
              <TableBody>
                <DataTableRow status={true ? '#FFC6C6' : '#B2D8B1'}>
                  <TableData>Conta de luz</TableData>
                  <TableData>04/06/2023</TableData>
                  <TableData>R$150,00</TableData>
                  <TableData>Saída</TableData>
                  <TableData>Pendente</TableData>
                  <TableData>
                    <CreateIcon className="icon" />
                    <DeleteIcon className="icon" />
                  </TableData>
                </DataTableRow>
                <DataTableRow status={false ? '#FFC6C6' : '#B2D8B1'}>
                  <TableData>Conta de luz</TableData>
                  <TableData>04/06/2023</TableData>
                  <TableData>R$150,00</TableData>
                  <TableData>Saída</TableData>
                  <TableData>Pendente</TableData>
                  <TableData>
                    <CreateIcon className="icon" />
                    <DeleteIcon className="icon" />
                  </TableData>
                </DataTableRow>
              </TableBody>
            </TableContainer>
          </MainTable>

          <OtherTables>
            <WalletTable>
              <TableTitle2>MINHA CARTEIRA</TableTitle2>
              <TableContainer>
                <TableHead>
                  <HeaderTableRow>
                    <TableHeader>DESCRIÇÃO</TableHeader>
                    <TableHeader>TOTAL INVESTIDO</TableHeader>
                    <TableHeader>PORC. DE JUROS A.A</TableHeader>
                    <TableHeader>AÇÕES</TableHeader>
                  </HeaderTableRow>
                </TableHead>
                <TableBody>
                  <DataTableRow status='#DDDDDD'>
                    <TableData>CDB Liquidez diária</TableData>
                    <TableData>R$23000,00</TableData>
                    <TableData>10.5%</TableData>
                    <TableData>
                      <CreateIcon className="icon" />
                      <DeleteIcon className="icon" />
                    </TableData>
                  </DataTableRow>
                  <DataTableRow status='#DDDDDD'>
                    <TableData>CDB Liquidez diária</TableData>
                    <TableData>R$23000,00</TableData>
                    <TableData>10.5%</TableData>
                    <TableData>
                      <CreateIcon className="icon" />
                      <DeleteIcon className="icon" />
                    </TableData>
                  </DataTableRow>
                </TableBody>
              </TableContainer>
            </WalletTable>
            <SummaryTable>
              <TableTitle2>RESUMO DO MÊS</TableTitle2>
              <TableContainer>
                
                <TableBody>
                  <DataTableRow status='#DDDDDD'>
                    <TableData>Total de entradas</TableData>
                    <TableData>R$23500,00</TableData>
                  </DataTableRow>
                  <DataTableRow status='#DDDDDD'>
                    <TableData>Total de saídas</TableData>
                    <TableData>R$23500,00</TableData>
                  </DataTableRow>
                  <DataTableRow status='#DDDDDD'>
                    <TableData>Balanço</TableData>
                    <TableData>R$23500,00</TableData>
                  </DataTableRow>
                  <DataTableRow status='#DDDDDD'>
                    <TableData>Total previsto para o mês</TableData>
                    <TableData>R$23500,00</TableData>
                  </DataTableRow>
                </TableBody>
              </TableContainer>
            </SummaryTable>
          </OtherTables>
        </HomeContent>
      </HomeArea>
    </>
  )
};