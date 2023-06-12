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

export const TableCalendar = styled.thead`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;

    .icon{
        color: #FFFFFF;
        cursor: pointer;
        &:hover{
            opacity: 0.8;
        }
    }
    .plus-icon{
        margin-right: 20px;
    }
`
export const Month = styled.tbody`
    color: #FFFFFF;
    cursor: pointer;
    margin: 0 5px;
    &:hover{
        opacity: 0.9;
    }
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
export const TableHead = styled.thead`

`

export const TableBody = styled.tbody`

`
export const HeaderTableRow = styled.tr`
    border-radius: 10px;
    font-weight: 700;
`
export const DataTableRow = styled.tr`
    border-radius: 10px;
    background-color: ${props => props.status };
    border: 1px solid #FFFFFF;
`
export const TableHeader = styled.th`
    background-color: #EEEEEE;
    text-align: left;
    padding: 10px;
    position: sticky;
    top: 0;
    z-index: 1;
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

export const OtherTables = styled.td`
    height: 25vh;
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
    font-size: 14px;
`

export const TableTitle2 = styled.thead`
    margin-top: 20px;
    background-color: #EEEEEE;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;
`

export const WalletTable = styled.td`
    height: 300px; /* Altura fixa do contêiner */
    overflow: auto; /* Adiciona rolagem às linhas */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(50%);
    height: 100%;
    background-color: #EEEEEE;
    color: #394867;
    border-radius: 10px;
    padding: 0 20px;

    .icon-area{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    .icon{
        cursor: pointer;
        &:hover{
            opacity: 0.8;
        }
    }
`

export const SummaryTable = styled.td`
    height: 300px; /* Altura fixa do contêiner */
    overflow: auto; /* Adiciona rolagem às linhas */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(50%);
    height: 100%;
    background-color: #EEEEEE;
    color: #394867;
    border-radius: 10px;
    padding: 0 20px;
`