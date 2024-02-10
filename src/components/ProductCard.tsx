import { Link, useNavigate, useNavigation } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <Link to={ `/produto/${id}`}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
    </Link>
  )
}

export default ProductCard