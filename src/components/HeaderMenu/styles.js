import styled from "styled-components";

export const HeaderArea = styled.div`
  width: 100%;
  height: 90px;
  background-color: #EEEEEE;
  color: #394867;
`

export const HeaderContainer = styled.div`
  max-width: 1170px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  
`

export const LeftContent = styled.div`
  font-size: 22px;
`

export const MiddleContent = styled.div`
  position: fixed;
  width: 130px;
  margin-left: calc((1170px / 2) - 65px);
  font-size: 30px;
  font-weight: bold;
`

export const RightContent = styled.div`
  display: flex;
  gap: 15px;
  font-size: 16px;
`

export const MenuItem = styled.div`
  padding: 10px;
  &:hover{
    cursor: pointer;
    background-color: #394867;
    color: #FFFFFF;
    border-radius: 10px;
  }
`