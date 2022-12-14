import styled from "styled-components"

export const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 400px;
  //width: 100%;
  border-radius: 2px;
  overflow: hidden;
  align-items: center;
  margin-right: 240px;
  
  
  
  input{
    width: 1000px;
    height:40px;
    padding: 4px 6px;
    border: 1px solid #555; 
    border-radius: 4px;
    outline: none;
    color: #555;
    background-color: #FFFF;
  
  }
  button {
    margin-left: 0.5px;
    flex: 1;
    cursor: pointer;
    background-color: #F29F05;
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border: 1px solid #555;
    border-radius: 4px;
    width: 60px;
    height: 30px;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;
