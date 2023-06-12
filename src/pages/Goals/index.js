import HeaderMenu from "../../components/HeaderMenu";
import { GoalsArea, GoalsContent, MainTable, TableBody, TableContainer, TableData, TableHead, TableHeader, HeaderTableRow, DataTableRow, Title, TableTitle, TableCalendar, Month, StatusArea } from "./styles";
import Modal from "../../components/Modal";
import ModalTrash from "../../components/ModalTrash";

import AddBoxIcon from '@mui/icons-material/AddBox';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";


export default () => {
  let data = [
    { id: 1, userId: 2, date: '23/06/2022', description: 'Viajar para disney', value: '10000,00' },
    { id: 2, userId: 2, date: '23/06/2022', description: 'Comprar um carro', value: '22500,00' },
    { id: 3, userId: 2, date: '23/06/2022', description: 'Comprar roupas', value: '1500,00' },
  ]

  const [goalsData, setGoalsData] = useState(data);
  const [editGoalModalIsOpen, setEditGoalModalIsOpen] = useState(false);
  const [addGoalModalIsOpen, setAddGoalModalIsOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [value, setValue] = useState('');
  const [trashModalIsOpen, setTrashModalIsOpen] = useState(false);

  function handleAddGoal() {
    setDescription('');
    setValue('');
    setDate('');
    setAddGoalModalIsOpen(true);
  }

  function handleEditGoal(id) {
    let row = goalsData.find(row => row.id === id);
    setDescription(row.description);
    setValue(row.value);
    setDate(row.date);
    setEditGoalModalIsOpen(true)
  }

  return (
    <>
      <HeaderMenu />
      <GoalsArea>
        <GoalsContent>
          <Title>MINHAS METAS</Title>
          <TableCalendar>
            <AddBoxIcon onClick={handleAddGoal} className="icon plus-icon" />
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
                {goalsData.map((data, ind) => (
                  <DataTableRow key={ind} status={false ? '#FFC6C6' : '#B2D8B1'}>
                    <TableData>{data.description}</TableData>
                    <TableData>{data.date}</TableData>
                    <TableData>R${data.value}</TableData>
                    <TableData>
                      <CreateIcon onClick={() => handleEditGoal(data.id)} className="icon" />
                      <DeleteIcon onClick={() => setTrashModalIsOpen(true)} className="icon" />
                    </TableData>
                  </DataTableRow>
                ))}
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
        <Modal isOpen={addGoalModalIsOpen} onClose={() => setAddGoalModalIsOpen(false)}>
          <form>
            <label>DESCRIÇÃO</label>
            <input
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <label>DATA PLANEJADA</label>
            <input
              value={date}
              onChange={e => setDate(e.target.value)}
            />
            <label>VALOR ESTIMADO</label>
            <input
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </form>
        </Modal>

        <Modal isOpen={editGoalModalIsOpen} onClose={() => setEditGoalModalIsOpen(false)}>
          <form>
            <label>DESCRIÇÃO</label>
            <input
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <label>DATA PLANEJADA</label>
            <input
              value={date}
              onChange={e => setDate(e.target.value)}
            />
            <label>VALOR ESTIMADO</label>
            <input
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </form>
        </Modal>

        <ModalTrash isOpen={trashModalIsOpen} onClose={() => setTrashModalIsOpen(false)} />
      </GoalsArea>
    </>
  )
};