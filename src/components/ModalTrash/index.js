import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

const ButtonsArea = styled.div`
  display: flex;
  justify-content: center;
  button{
    margin-top: 40px;
    margin-right: 15px;
    border: 0;
    border-radius: 5px;
    padding: 10px 30px;
    cursor: pointer;
    background-color: #DDDDDD;
    
    &:hover{
      opacity: 0.8;
    }
  }
`;

const ModalTrash = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        Tem certeza que quer excluir esse item?
        <ButtonsArea>
        <button>Sim</button>
        <button onClick={onClose}>Não</button>
        </ButtonsArea>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalTrash;