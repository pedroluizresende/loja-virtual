import styled from 'styled-components';

export const CartItemDiv = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #c4c1c1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  min-width: 70%;

  img {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
  }


  button {
    background: none;
    border: none;
    cursor: pointer;
    align-self: center;
    margin-right: 1rem;
  }
`;

export const InfoSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.7rem;
  }
`;
