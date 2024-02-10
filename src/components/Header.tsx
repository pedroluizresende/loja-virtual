import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <h1>Loja Virtual</h1>
      <ol>
        <li><Link to="/">Produtos</Link></li>
        <li><Link to="/carrinho">Carrinho</Link></li>
      </ol>
    </header>
  )
}

export default Header