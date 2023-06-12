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
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  

  form{
    display: flex;
    flex-direction: column;
  }
  input{
    border: 1px solid #DDDDDD;
    border-radius: 5px;
  }
  select{
    border: 1px solid #DDDDDD;
    border-radius: 5px;
  }
  label{
    font-size: 12px;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 3px;
  }
  button{
    margin-top: 15px;
    border: 0;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    background-color: #DDDDDD;
    
    &:hover{
      opacity: 0.8;
    }
  }
  .greenColor{
    background-color: #B2D8B1;
  }
`;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        {children}
        <button className='greenColor'>Salvar</button>
        <button onClick={onClose}>Fechar</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;