import { Link } from 'react-router-dom';
import styles from 'styled-components';

export const Card = styles(Link)`
  list-style: none;
  width: 200px;
  min-height: 200px;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-decoration: none;
  color: #000;
  align-items: center;

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }

  h2 {
    text-align: center;
    margin: 0.5rem;
    text-transform: uppercase;
    style-style: bold;
  }
  
  p {
    text-align: center;
    margin: 1rem;
  }
`;

export const CardImage = styles.img`
  width: 200px;
  height: 200px;
  border-radius: 5px 5px 0 0;
  border: 1 px solid red;
  align-self: center;
`;
