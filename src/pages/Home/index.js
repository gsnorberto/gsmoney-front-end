import HeaderMenu from "../../components/HeaderMenu";
import { HomeArea, HomeContent, MainTable, TableBody, TableContainer, TableData, TableHead, TableHeader, HeaderTableRow, DataTableRow, Title, TableTitle, TableTitle2, TableCalendar, Month, OtherTables, SummaryTable, WalletTable } from "./styles";
import Modal from "../../components/Modal";
import ModalTrash from "../../components/ModalTrash";

import AddBoxIcon from '@mui/icons-material/AddBox';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

export default () => {
  let data = [
    { id: 1, userId: 2, type: 'in', value: '12,50', status: 'pending', date: '04/06/2023', description: 'Conta de luz' },
    { id: 2, userId: 2, type: 'out', value: '12,50', status: 'completed', date: '08/06/2023', description: 'Conta de luz' },
    { id: 3, userId: 2, type: 'in', value: '12,50', status: 'pending', date: '07/06/2023', description: 'Conta de água' }
  ]
  let data2 = [
    { id: 1, userId: 2, interestPercentage: '1', description: 'Poupança', totalBalance: '123,00' },
    { id: 2, userId: 2, interestPercentage: '1', description: 'CDB', totalBalance: '123,00' },
    { id: 3, userId: 2, interestPercentage: '1', description: 'LCI', totalBalance: '123,00' },
  ]

  const [inflowOutflowData, setInflowOutflowData] = useState(data);
  const [walletData, setWalletData] = useState(data2);
  const [mainTableIsOpen, setMainTableIsOpen] = useState(false);
  const [walletTableIsOpen, setWalletTableIsOpen] = useState(false);
  const [newInflowOrOutflowIsOpen, setNewInflowOrOutflowIsOpen] = useState(false);
  const [newWalletIsOpen, setNewWalletIsOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [totalInvested, setTotalInvested] = useState('');
  const [interestPercentage, setInterestPercentage] = useState('');
  const [trashModalIsOpen, setTrashModalIsOpen] = useState(false);

  function handleInflowOutFlowModal(id) {
    let row = inflowOutflowData.find(row => row.id === id);
    setDescription(row.description);
    setValue(row.value);
    setDate(row.date);
    setType(row.type);
    setStatus(row.status);

    setMainTableIsOpen(true);
  }

  function handleWalletModal(id) {
    let row = walletData.find(row => row.id === id);
    setDescription(row.description);
    setTotalInvested(row.totalBalance);
    setInterestPercentage(row.interestPercentage);

    setNewWalletIsOpen(true);
  }

  function handleNewInflowOrOutflow(id) {
    setDescription('');
    setValue('');
    setDate('');
    setType('');
    setStatus('');

    setNewInflowOrOutflowIsOpen(true);
  }

  function handleNewWallet() {
    setDescription('');
    setTotalInvested('');
    setInterestPercentage('');

    setNewWalletIsOpen(true);
  }

  return (
    <>
      <HeaderMenu />
      <HomeArea>
        <HomeContent>
          <Title>CONTROLE FINANCEIRO</Title>
          <TableCalendar>
            <AddBoxIcon onClick={handleNewInflowOrOutflow} className="icon plus-icon" />
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
                {inflowOutflowData.map((data, i) => (
                  <DataTableRow key={i} status={data.type === 'out' ? '#FFC6C6' : '#B2D8B1'}>
                    <TableData>{data.description}</TableData>
                    <TableData>{data.date}</TableData>
                    <TableData>R${data.value}</TableData>
                    <TableData>{data.type === 'in' ? 'Entrada' : 'Saída'}</TableData>
                    <TableData>{data.status === 'pending' ? 'Pendente' : 'OK'}</TableData>
                    <TableData>
                      <CreateIcon onClick={() => handleInflowOutFlowModal(data.id)} className="icon" />
                      <DeleteIcon onClick={() => setTrashModalIsOpen(true)} className="icon" />
                    </TableData>
                  </DataTableRow>
                ))}
              </TableBody>
            </TableContainer>
          </MainTable>

          <OtherTables>

            <WalletTable>
              <TableTitle2>MINHA CARTEIRA</TableTitle2>
              <div className="icon-area">
                <AddBoxIcon onClick={handleNewWallet} className="icon plus-icon" />
              </div>
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
                  {walletData.map((data, ind) => (
                    <DataTableRow key={ind} status='#DDDDDD'>
                      <TableData>{data.description}</TableData>
                      <TableData>R${data.totalBalance}</TableData>
                      <TableData>{data.interestPercentage}%</TableData>
                      <TableData>
                        <CreateIcon onClick={() => handleWalletModal(data.id)} className="icon" />
                        <DeleteIcon onClick={() => setTrashModalIsOpen(true)} className="icon" />
                      </TableData>
                    </DataTableRow>
                  ))}
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
        <Modal isOpen={mainTableIsOpen} onClose={() => setMainTableIsOpen(false)}>
          <form>
            <label>DESCRIÇÃO</label>
            <input
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <label>DATA</label>
            <input
              value={date}
              onChange={e => setDate(e.target.value)}
            />
            <label>VALOR</label>
            <input
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            <label>TIPO</label>
            <select>
              {type === 'in' ? <option selected>Entrada</option> : <option>Entrada</option>}
              {type === 'out' ? <option selected>Saída</option> : <option>Saída</option>}
            </select>
            <label>STATUS</label>
            <select>
              {status === 'pending' ? <option selected>Pendente</option> : <option>Pendente</option>}
              {status === 'completed' ? <option selected>OK</option> : <option>OK</option>}
            </select>
          </form>
        </Modal>

        <Modal isOpen={walletTableIsOpen} onClose={() => setWalletTableIsOpen(false)}>
          <form>
            <label>DESCRIÇÃO</label>
            <input
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <label>TOTAL INVESTIDO</label>
            <input
              value={totalInvested}
              onChange={e => setTotalInvested(e.target.value)}
            />
            <label>PORC. DE JUROS A.A</label>
            <input
              value={interestPercentage}
              onChange={e => setInterestPercentage(e.target.value)}
            />
          </form>
        </Modal>

        <Modal isOpen={newInflowOrOutflowIsOpen} onClose={() => setNewInflowOrOutflowIsOpen(false)}>
          <form>
          <label>DESCRIÇÃO</label>
            <input
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <label>DATA</label>
            <input
              value={date}
              onChange={e => setDate(e.target.value)}
            />
            <label>VALOR</label>
            <input
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            <label>TIPO</label>
            <select>
              <option>Entrada</option>
              <option>Saída</option>
            </select>
            <label>STATUS</label>
            <select>
              <option>Pendente</option>
              <option>OK</option>
            </select>
          </form>
        </Modal>

        <Modal isOpen={newWalletIsOpen} onClose={() => setNewWalletIsOpen(false)}>
          <form>
            <label>DESCRIÇÃO</label>
            <input
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <label>TOTAL INVESTIDO</label>
            <input
              value={totalInvested}
              onChange={e => setTotalInvested(e.target.value)}
            />
            <label>PORC. DE JUROS A.A</label>
            <input
              value={interestPercentage}
              onChange={e => setInterestPercentage(e.target.value)}
            />
          </form>
        </Modal>
        
        <ModalTrash isOpen={trashModalIsOpen} onClose={() => setTrashModalIsOpen(false)} />
      </HomeArea>
    </>
  )
};