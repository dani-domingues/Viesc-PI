import styled from 'styled-components';


export const StyledBanner = styled.div`
margin-top:30;
background-color: blue;
background-image: url(${({ bg }) => bg});
height: 230px;
`;