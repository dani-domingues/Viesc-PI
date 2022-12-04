import styled from 'styled-components';

export const StyledTimeline = styled.div`
  height: 100%;
  flex: 1;
  overflow: hidden;
  color: #F29F05;
  background-color:#D9D9D9;

  

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
    text-transform: capitalize;
    background-color:#D90479;
    width: 100%;
    height: 40px;
    padding: 10px;
    text-shadow: -1px -1px 0px black;

    
  }
  img {
    border-radius: 4%;
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    font-weight: bold;
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        scrollbar-color: #D90479;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;