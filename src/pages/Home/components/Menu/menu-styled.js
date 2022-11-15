import styled from 'styled-components';

export const StyledMenu = styled.header`
    display: flex;
    flex-direction: row;
    height: 75px;
    justify-content: center;
    background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
    border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
    align-items: center;
    padding: 0 16px;
    gap: 16px;
    
    width: 100%;
    `;