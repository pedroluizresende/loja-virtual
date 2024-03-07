import { Card, CardImage } from '../styles/productCard';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <Card to={ `/produto/${id}` }>
      <CardImage src={ image } alt={ name } />
      <p>{name}</p>
      <h2>{`R$ ${price.toFixed(2).replace('.', ',')}`}</h2>
    </Card>
  );
}

export default ProductCard;
