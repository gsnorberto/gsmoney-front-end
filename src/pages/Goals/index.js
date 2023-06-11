import HeaderMenu from "../../components/HeaderMenu";
import { GoalsArea, GoalsContent, MainTable, TableBody, TableContainer, TableData, TableHead, TableHeader, HeaderTableRow, DataTableRow, Title, TableTitle, TableCalendar, Month, StatusArea } from "./styles";

import AddBoxIcon from '@mui/icons-material/AddBox';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';


export default () => {
  return (
    <>
      <HeaderMenu />
      <GoalsArea>
        <GoalsContent>
          <Title>MINHAS METAS</Title>
          <TableCalendar>
            <AddBoxIcon className="icon plus-icon" />
          </TableCalendar>
          <MainTable>
            <TableTitle>2023</TableTitle>
            <TableContainer>
              <TableHead>
                <HeaderTableRow>
                  <TableHeader>DESCRIÇÃO</TableHeader>
                  <TableHeader>DATA PLANEJADA</TableHeader>
                  <TableHeader>VALOR ESTIMADO</TableHeader>
                  <TableHeader>AÇÕES</TableHeader>
                </HeaderTableRow>
              </TableHead>
              <TableBody>
                <DataTableRow status={true ? '#FFC6C6' : '#B2D8B1'}>
                  <TableData>Viajar para Disney</TableData>
                  <TableData>01/09/2023</TableData>
                  <TableData>R$15000,00</TableData>
                  <TableData>
                    <CreateIcon className="icon" />
                    <DeleteIcon className="icon" />
                  </TableData>
                </DataTableRow>
                <DataTableRow status={false ? '#FFC6C6' : '#B2D8B1'}>
                  <TableData>Viajar para Disney</TableData>
                  <TableData>01/09/2023</TableData>
                  <TableData>R$15000,00</TableData>
                  <TableData>
                    <CreateIcon className="icon" />
                    <DeleteIcon className="icon" />
                  </TableData>
                </DataTableRow>
              </TableBody>
            </TableContainer>
          </MainTable>
          <StatusArea>
            <div className="status">
              <div className="icon green"></div>
              Possível
            </div>
            <div className="status">
              <div className="icon red"></div>
              Não possível, no momento
            </div>
          </StatusArea>
        </GoalsContent>
      </GoalsArea>
    </>
  )
};