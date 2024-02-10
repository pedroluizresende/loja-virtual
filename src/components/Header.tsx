import { CustomHeader, CustomLink } from "../styles/header"

function Header() {
  return (
    <CustomHeader>
      <h1>Loja Virtual</h1>
      <ol>
        <li><CustomLink to="/">Produtos</CustomLink></li>
        <li><CustomLink to="/carrinho">Carrinho</CustomLink></li>
      </ol>
    </CustomHeader>
  )
}

export default Header