import styles from 'styled-components';

export const CustomMain = styles.main`
  display: flex;
  justify-content: center;
  padding: auto;
  margin: 3rem 0;
`;

export const DetailSection = styles.section`
  margin: 0 auto;
  display: flex;
  background-color: #ffff;
  border-radius: 5px;
  padding: 1rem;
  justify-content: space-around;
`;

export const DetailImage = styles.img`
  width: 300px;
  height: 300px;
  border-radius: 5px 5px 0 0;
  border: 1 px solid red;
  align-self: center;
`;
export const TextSection = styles.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
  width: 50%;
  justify-content: space-around;

  h1 {
    text-align: center;
  }

  p {
    align-self: center;
  }

  span {
    text-align: center;
    position: relative;
    bottom: 0;
  }
`;

export const Button = styles.button`
  width: 50%;
  align-self: center;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: #f4f4f4;
  border: 1px solid #000;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #000;
    color: #f4f4f4;
  }
`;
