import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CustomHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 6rem;
  background-color: #333;
  color: #fff;
  ol {
    display: flex;
    list-style: none;
  }
  h1 {
    font-size: 1.5rem;
  }
`;

export const CustomLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;
  transition: 0.3s;
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }

  p {
    margin: 0;
    padding: 0;
    background-color: #fff;
    border-radius: 100%;
    width: 1rem;
    height: 1rem;
    color: #e40f0f;
    display: flex;
    justify-content: center;
    margin-left: 0.1rem;
  }
`;
