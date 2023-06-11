import styled from "styled-components";

export const HomeArea = styled.div`
    width: 100%;
    height: calc(100vh - 90px);
    background-color: #394867;
`

export const HomeContent = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.div`
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    padding: 36px 0 15px 0;
`

export const TableContainer = styled.table`
    width: 100%;
    background-color: #EEEEEE;
    border-radius: 10px;
    margin-top: 10px;
`
export const MainTable = styled.div`
    height: 50vh; /* Altura fixa do contêiner */
    overflow: auto; /* Adiciona rolagem às linhas */
    width: 100%;
    background-color: #EEEEEE;
    color: #394867;
    padding: 20px;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`
export const TableTitle = styled.thead`
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 10px;
    text-align: center;
`
export const TableBody = styled.tbody`

`
export const DataTableRow = styled.tr`
    border-radius: 10px;
    background-color: #FFFFFF;
    border: 1px solid #DDDDDD;
`
export const TableData = styled.td`
    padding: 10px;

    .icon{
        cursor: pointer;
        margin-right: 5px;        
        &:hover{
            opacity: 0.8;
        }
    }
`