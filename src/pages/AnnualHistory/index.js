import HeaderMenu from "../../components/HeaderMenu";
import { HomeArea, HomeContent, MainTable, TableBody, TableContainer, TableData, DataTableRow, Title, TableTitle } from "./styles";

export default () => {
  return (
    <>
      <HeaderMenu />
      <HomeArea>
        <HomeContent>
          <Title>HISTÓRICO ANUAL</Title>
          <MainTable>
            <TableTitle>2023</TableTitle>
            <TableContainer>
              
              <TableBody>
                <DataTableRow status={true ? '#FFC6C6' : '#B2D8B1'}>
                  <TableData>Total de entradas</TableData>
                  <TableData>R$23500,00</TableData>
                  
                </DataTableRow>
                <DataTableRow status={false ? '#FFC6C6' : '#B2D8B1'}>
                  <TableData>Total de saídas</TableData>
                  <TableData>R$23500,00</TableData>
                </DataTableRow>
                <DataTableRow status={false ? '#FFC6C6' : '#B2D8B1'}>
                  <TableData>Balanço</TableData>
                  <TableData>R$23500,00</TableData>
                </DataTableRow>
                <DataTableRow status={false ? '#FFC6C6' : '#B2D8B1'}>
                  <TableData>Valor total da carteira</TableData>
                  <TableData>R$23500,00</TableData>
                </DataTableRow>
              </TableBody>
            </TableContainer>
          </MainTable>

          
        </HomeContent>
      </HomeArea>
    </>
  )
};