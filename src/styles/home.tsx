import styles from 'styled-components'

export const CustomMain = styles.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: auto;

h1 {
  text-align: center;
  margin: 3rem 3rem 0 1rem;
}
`

export const ProductsList = styles.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 2rem 0 2rem;
  width: 90%;
`