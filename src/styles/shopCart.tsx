import styled from 'styled-components'

export const CustomMain = styled.main`
  display: flex;
  justify-content: center;
  padding: auto;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 3rem 0;
  }
`

export const CartSection = styled.section`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 1rem;
  align-items: center;
  border-radius: 10px;
  min-width: 300px;
 
`;

export const CartList = styled.ul`
    max-height: 300px;
    overflow-y: auto;
    min-width: 300px
`

export const ResumeSection = styled.section`
  display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    min-height: 300px;
    flex: 1;
`
