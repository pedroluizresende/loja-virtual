import styled from 'styled-components';

export const CartItemDiv = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #c4c1c1;
  width: 100%;
  height: 100px;
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

export const QuantitySection = styled.div`
  display: flex;
  align-items: center;
  padding: auto;
  width: 4rem;
  border: 1px solid #c4c1c1;
  justify-content: space-between;
  padding: 0.25rem 0.5rem;
  margin-top: 0.5rem;
  p {
    border: 1px solid red;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    margin: 0 0;
    font-size: 1rem;
  }

  button:hover {
    font-weight: bold;
  }

  input {
    text-align: center;
    border: none;
    width: 1rem;
}
`;
