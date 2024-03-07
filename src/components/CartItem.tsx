import { FaTrash } from 'react-icons/fa';
import { CartItemDiv, InfoSection, QuantitySection } from '../styles/cartItem';

function CartItem({
  id,
  image,
  name,
  price,
  quantity,
  removeProductFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
} : {
  id: number,
  image: string,
  name: string,
  price: number,
  quantity: number,
  removeProductFromCart: (id: number) => void,
  increaseProductQuantity: (id: number) => void,
  decreaseProductQuantity: (id: number) => void,

}) {
  return (
    <CartItemDiv key={ id }>
      <img src={ image } alt={ name } />
      <InfoSection>
        <h3>{name}</h3>
        <p>{`R$ ${price.toFixed(2)}`}</p>
        <QuantitySection>
          <button onClick={ () => decreaseProductQuantity(id) }>-</button>
          <input type="text" aria-label="quantity" value={ quantity } />
          <button onClick={ () => increaseProductQuantity(id) }>+</button>
        </QuantitySection>
      </InfoSection>
      <button
        onClick={ () => removeProductFromCart(id) }
        aria-label="remove product"
      >
        <FaTrash />
      </button>

    </CartItemDiv>
  );
}

export default CartItem;
