import { CustomHeader, CustomLink } from '../styles/header';

function Header() {
  const getCartSize = () => {
    const cart = JSON.parse(localStorage.getItem('products') || '[]');
    return cart.length;
  };

  return (
    <CustomHeader>
      <h1>Loja Virtual</h1>
      <ol>
        <li><CustomLink to="/">Produtos</CustomLink></li>
        <li>
          <CustomLink to="/carrinho">
            Carrinho

            {
          getCartSize() > 0 && <p>{getCartSize()}</p>
        }
          </CustomLink>
        </li>
      </ol>
    </CustomHeader>
  );
}

export default Header;
