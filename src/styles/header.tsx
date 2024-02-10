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
`

export const CustomLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;
  transition: 0.3s;
  &:hover {
    text-decoration: underline;
  }
`